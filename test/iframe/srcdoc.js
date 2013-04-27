var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');


  // Test for `srcdoc` attribute in iframes.
  //
  // Spec: http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-srcdoc

  Modernizr.addTest('srcdoc', 'srcdoc' in createElement('iframe'));

