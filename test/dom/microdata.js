var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');


  // Microdata support
  // http://www.w3.org/TR/html5/microdata.html
  Modernizr.addTest('microdata', 'getItems' in document);

