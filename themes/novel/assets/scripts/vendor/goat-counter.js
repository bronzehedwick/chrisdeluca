(function() {
  if (window.location.hostname.indexOf('localhost') > -1) {
    return;
  }

  var script = document.createElement('script');
  window.counter = 'https://chrisdeluca.goatcounter.com/count'
  script.async = 1;
  script.src = 'https://gc.zgo.at/count.js';

  var ins = document.getElementsByTagName('script')[0];
  ins.parentNode.insertBefore(script, ins)
})();
