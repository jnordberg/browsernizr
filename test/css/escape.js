var Modernizr = require('./../../lib/Modernizr');

/*!
{
  "name": "CSS.escape()",
  "property": "cssescape",
  "polyfills": [
    "css-escape"
  ],
  "tags": [
    "css",
    "cssom"
  ]
}
!*/
/* DOC
Tests for `CSS.escape()` support.
*/

  var CSS = window.CSS;
  Modernizr.addTest('cssescape', CSS ? typeof CSS.escape == 'function' : false);

