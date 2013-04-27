var Modernizr = require('./../lib/Modernizr');
var prefixed = require('./../lib/prefixed');


  // requestAnimationFrame
  // Offload animation repainting to browser for optimized performance.
  // http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/RequestAnimationFrame/Overview.html
  // By Addy Osmani

  Modernizr.addTest('raf', !!prefixed('requestAnimationFrame', window));

