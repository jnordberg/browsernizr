/*!
{
  "name": "cssall",
  "property": "cssall",
  "notes": [{
    "name": "Spec",
    "href": "http://dev.w3.org/csswg/css-cascade/#all-shorthand"
  }]
}
!*/
/* DOC
Detects support for the `all` css property, which is a shorthand to reset all css properties (except direction and unicode-bidi) to their original value
*/

var Modernizr = require('./../../lib/Modernizr.js');
var docElement = require('./../../lib/docElement.js');
  Modernizr.addTest('cssall', 'all' in docElement.style);

