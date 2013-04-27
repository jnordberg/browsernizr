var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');


  // Test for `seamless` attribute in iframes.
  //
  // Spec: http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-seamless

  Modernizr.addTest('seamless', 'seamless' in createElement('iframe'));

