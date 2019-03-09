// Array.from polyfill {{{
/* eslint-disable */
// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) { return 0; }
      if (number === 0 || !isFinite(number)) { return number; }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike/*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method 
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  }());
}
/* eslint-enable */
// }}}

(function game() {
    'use strict';

    var achievements = JSON.parse(window.localStorage.getItem('achievements'));
    var pageKey = window.location.pathname.replace('/article/', '').replace('/','');
    var interaction = 'click';
    if (typeof PointerEvent === 'function') {
        interaction = 'pointerup';
    }

    function addAchievementToDOM(text) {
        var achievementItem = document.createElement('li');
        achievementItem.textContent = text;
        document.getElementById('achievements-list').appendChild(achievementItem);
    }

    if (achievements && achievements[pageKey] && achievements[pageKey].length > 0) {
        achievements[pageKey].forEach(addAchievementToDOM);
    }

    document.documentElement.addEventListener(interaction, function choiceClicks(event) {
        var achievement = event.target.dataset.achievement;
        if (!event.target.closest('.game-button')) {
            return false;
        }

        // Achievement.
        if (achievement) {
            if (!achievements || !achievements[pageKey]) {
                achievements = {};
                achievements[pageKey] = [];
            }
            if (achievements[pageKey].indexOf(achievement) !== -1) {
                return false;
            }
            document.getElementById('achievement-message').textContent = achievement;
            document.getElementById('achievement').classList.add('achievement--active');
            window.setTimeout(function hideAchievementMessage() {
                document.getElementById('achievement').classList.remove('achievement--active');
            }, 5000);
            addAchievementToDOM(achievement);
            achievements[pageKey].push(achievement);
            window.localStorage.setItem('achievements', JSON.stringify(achievements));
        }

        if (event.target.dataset.targetId === 'restart') {
            // Hide all exposed paths.
            Array.from(document.querySelectorAll('.game-scene'))
                .forEach(function hideGamePath(element) {
                    element.hidden = true;
                });
            // Re-enable all choices.
            Array.from(document.querySelectorAll('.game-button'))
                .forEach(function showChoices(element) {
                    element.removeAttribute('disabled');
                    element.classList.remove('game-button--selected');
                });
            // Show the starting segment.
            document.querySelector('.game-scene').hidden = false;
            // Scroll to top, aka the beginning of the story.
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
            return;
        }

        // Show the path selected.
        document.getElementById(event.target.dataset.targetId).hidden = false;
        // Disable the buttons to choose the current path, and indicate your correct choice.
        Array.from(
            event.target.parentNode.querySelectorAll('.game-button')
        ).forEach(function disableButtons(button) {
            button.setAttribute('disabled', 'disabled');
            if (button.dataset.targetId === event.target.dataset.targetId) {
                button.classList.add('game-button--selected');
            }
        });
    }, false);
})();

// vim: foldmethod=marker
