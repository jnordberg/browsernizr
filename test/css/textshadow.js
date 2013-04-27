var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');


  // FF3.0 will false positive on this test
  Modernizr.addTest('textshadow', createElement('div').style.textShadow === '');

