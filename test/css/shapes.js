/*!
{
  "name": "CSS Shapes",
  "property": "shapes",
  "tags": ["css"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css-shapes"
  },{
    "name": "Examples from Adobe",
    "href": "https://web.archive.org/web/20171230010236/http://webplatform.adobe.com:80/shapes"
  }, {
    "name": "Examples from CSS-Tricks",
    "href": "https://css-tricks.com/examples/ShapesOfCSS/"
  }]
}
!*/
var Modernizr = require('./../../lib/Modernizr.js');
var testAllProps = require('./../../lib/testAllProps.js');
  Modernizr.addTest('shapes', testAllProps('shapeOutside', 'content-box', true));

