(function main() {
  'use strict';

  var sidebarShouldOpen = window.matchMedia('(min-width: 50em)');

  function handleSidebarToggle(event) {
    if (event.matches) {
      document.querySelector('.main-navigation details').open = true;
    }
    else {
      document.querySelector('.main-navigation details').open = false;
    }
  }

  sidebarShouldOpen.addListener(handleSidebarToggle);
  handleSidebarToggle(sidebarShouldOpen);

})();
