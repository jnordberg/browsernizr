/*!
{
  "name": "input[capture] Attribute",
  "property": "capture",
  "tags": ["video", "image", "audio", "media", "attribute"],
  "notes": [{
    "name": "W3C Draft Spec",
    "href": "https://www.w3.org/TR/html-media-capture/"
  }]
}
!*/
/* DOC
When used on an `<input>`, this attribute signifies that the resource it takes should be generated via device's camera, camcorder, sound recorder.
*/
var Modernizr = require('./../../lib/Modernizr.js');
var createElement = require('./../../lib/createElement.js');
  // testing for capture attribute in inputs
  Modernizr.addTest('capture', ('capture' in createElement('input')));

