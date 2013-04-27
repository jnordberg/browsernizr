var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');


  // defer script
  // By Theodoor van Donge
  Modernizr.addTest('scriptdefer', 'defer' in createElement('script'));

