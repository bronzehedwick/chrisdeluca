(function webmentions() {
    'use strict';

    const url = 'https://webmention.io/api/count';
    const data = {target: 'https://www.chrisdeluca.me/article/twelve-angry-rejections/'};

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
})();
