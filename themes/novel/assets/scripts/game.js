if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

(function game() {
    'use strict';

    var achievements = JSON.parse(window.localStorage.getItem('achievements'));
    var pageKey = window.location.pathname.replace('/article/', '').replace('/','');
    var totalAchievements = document.querySelectorAll('[data-achievement]').length;
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
            if (achievements[pageKey].indexOf(achievement) === -1) {
                document.getElementById('achievement-message').textContent = achievement;
                document.getElementById('achievement').classList.add('achievement--active');
                window.setTimeout(function hideAchievementMessage() {
                    document.getElementById('achievement').classList.remove('achievement--active');
                }, 5000);
                addAchievementToDOM(achievement);
                achievements[pageKey].push(achievement);
                window.localStorage.setItem('achievements', JSON.stringify(achievements));
                document.getElementById('achievements-count').textContent = achievements[pageKey].length + '/' + totalAchievements;
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
