(function main() {
  'use strict';

  var darkTheme = JSON.parse(window.localStorage.getItem('darkTheme'));
  var themeWord = darkTheme ? 'disable' : 'enable';

  if (darkTheme) {
    document.body.classList.add('dark-theme');
  }

  /* eslint-disable no-console */
  console.log('Psst! You can ' + themeWord + ' the dark theme by running `toggleDarkTheme()` in your console.');
  /* eslint-enable no-console */

  window.toggleDarkTheme = function toggleDarkTheme() {
    document.body.classList.toggle('dark-theme');
    window.localStorage.setItem('darkTheme', JSON.stringify(!darkTheme));
  };

})();
