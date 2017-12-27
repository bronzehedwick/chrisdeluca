(function sceneHighlight() {
  'use strict';

  function highlightLines(query) {
    var elements = document.querySelectorAll(query);

    Array.from(document.querySelectorAll('.highlight')).forEach(function removePreviousHighlight(element) {
      element.classList.remove('.highlight');
    });

    Array.from(elements).forEach(function iterateElements(element) {
      element.classList.add('highlight');
    });

    elements[0].scrollIntoView({behavior: 'smooth'});

  }

  window.addEventListener('hashchange', function hashChangeCallback(event) {
    var query = '.' + event.newURL.split('#')[1];
    highlightLines(query);
  });

  window.addEventListener('load', function loadCallback(event) {
    var query = window.location.hash;
    if (query) {
      highlightLines('.' + query.split('#')[1]);
    }
  });

})();
