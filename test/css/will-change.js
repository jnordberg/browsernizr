var Modernizr = require('./../../lib/Modernizr');
var docElement = require('./../../lib/docElement');

/*!
{
  "name": "will-change",
  "property": "willchange",
  "notes": [{
    "name": "Spec",
    "href": "http://tabatkins.github.io/specs/css-will-change/"
  }]
}
!*/
/* DOC
Detects support for the `will-change` css property, which formally signals to the
browser that an element will be animating.
*/

  Modernizr.addTest('willchange', 'willChange' in docElement.style);

