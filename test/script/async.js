var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');


  // async script
  // By Theodoor van Donge
  Modernizr.addTest('scriptasync', 'async' in createElement('script'));

