var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');


  // Test for `sandbox` attribute in iframes.
  //
  // Spec: http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-sandbox
  Modernizr.addTest('sandbox', 'sandbox' in createElement('iframe'));

