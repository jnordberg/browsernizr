var Modernizr = require('./../lib/Modernizr');
var prefixed = require('./../lib/prefixed');


  // Tests for the ability to use Web Intents (http://webintents.org).
  // By Eric Bidelman
  Modernizr.addTest('webintents', !!prefixed('startActivity', navigator));

