if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

(function game() {
  'use strict';

  var achievements = JSON.parse(window.localStorage.getItem('achievements'));
  var pageKey = window.location.pathname.replace('/article/', '').replace('/','');
  var totalAchievements = document.querySelectorAll('[data-achievement-text]').length;
  var achievementsHeadline = document.getElementById('achievements-headline');
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
    achievementsHeadline.innerHTML += ' <span id="achievements-count">' + achievements[pageKey].length + '/' + totalAchievements + '</span>';
  }
  else {
    achievementsHeadline.innerHTML += ' <span id="achievements-count">0/' + totalAchievements + '</span>';
  }

  document.documentElement.addEventListener(interaction, function choiceClicks(event) {
    var achievementText = event.target.dataset.achievementText;
    var achievementType = event.target.dataset.achievementType;
    if (!event.target.closest('.game-button')) {
      return false;
    }

    // Achievement.
    if (achievementText) {
      if (!achievements || !achievements[pageKey]) {
        achievements = {};
        achievements[pageKey] = [];
      }
      if (achievements[pageKey].indexOf(achievementText) === -1) {
        document.getElementById('achievement-message').textContent = achievementText;
        document.getElementById('achievement').classList.add('achievement--active');
        document.getElementById('achievement').dataset.achievementType = achievementType;
        window.setTimeout(function hideAchievementMessage() {
          document.getElementById('achievement').classList.remove('achievement--active');
        }, 5000);
        addAchievementToDOM(achievementText);
        achievements[pageKey].push(achievementText);
        window.localStorage.setItem('achievements', JSON.stringify(achievements));
        document.getElementById('achievements-count').textContent = achievements[pageKey].length + '/' + totalAchievements;
      }
      if (achievements[pageKey].length === totalAchievements) {
        addAchievementToDOM('⭐️ Beat the game to the max!');
        achievements[pageKey].push('⭐️ Beat the game to the max!');
        window.localStorage.setItem('achievements', JSON.stringify(achievements));
        document.getElementById('achievements-count').textContent = ( totalAchievements + 1 ) + '/' + ( totalAchievements + 1 );
        document.getElementById('achievement-max').classList.add('achievement--active');
        document.querySelector('#achievement-max button').addEventListener('click', function click() {
          document.getElementById('achievement-max').classList.remove('achievement--active');
        }, false);
      }
    }

    if (event.target.dataset.targetId === 'restart') {
      // Hide all exposed paths.
      document.querySelectorAll('.game-scene')
        .forEach(function hideGamePath(element) {
          element.hidden = true;
        });
      // Re-enable all choices.
      document.querySelectorAll('.game-button')
        .forEach(function showChoices(element) {
          element.removeAttribute('disabled');
          element.classList.remove('game-button--selected');
        });
      // Show the starting segment.
      document.querySelector('.game-scene').hidden = false;
      // Scroll to top, aka the beginning of the story.
      window.scrollTo(0, 0);
      return;
    }

    // Show the path selected.
    document.getElementById(event.target.dataset.targetId).hidden = false;
    // Disable the buttons to choose the current path, and indicate your correct choice.
    event.target.parentNode.querySelectorAll('.game-button')
      .forEach(function disableButtons(button) {
        button.setAttribute('disabled', 'disabled');
        if (button.dataset.targetId === event.target.dataset.targetId) {
          button.classList.add('game-button--selected');
        }
      });
  }, false);
})();

// vim: foldmethod=marker
