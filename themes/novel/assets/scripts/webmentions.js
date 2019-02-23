(function webmentions() {
    'use strict';

    fetch(`https://webmention.io/api/mentions.jf2?target=${window.location}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
})();
