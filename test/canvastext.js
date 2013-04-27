var Modernizr = require('./../lib/Modernizr');
var createElement = require('./../lib/createElement');
require('./../lib/test/canvas');


  Modernizr.addTest('canvastext',  function() {
    if (Modernizr.canvas  === false) return false;
    return typeof createElement('canvas').getContext('2d').fillText == 'function';
  });

