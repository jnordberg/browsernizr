var Modernizr = require('./../../lib/Modernizr');
var docElement = require('./../../lib/docElement');


  // classList
  // https://developer.mozilla.org/en/DOM/element.classList
  Modernizr.addTest('classlist', 'classList' in docElement);

