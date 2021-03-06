/*!
{
  "name": "CSS Generated Content",
  "property": "generatedcontent",
  "tags": ["css"],
  "warnings": ["Android won't return correct height for anything below 7px #738"],
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/css3-selectors/#gen-content"
  },{
    "name": "MDN Docs on :before",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
  },{
    "name": "MDN Docs on :after",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/::after"
  }]
}
!*/
var Modernizr = require('./../../lib/Modernizr.js');
var testStyles = require('./../../lib/testStyles.js');
  testStyles('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}', function(node) {
    // See bug report on why this value is 6 crbug.com/608142
    Modernizr.addTest('generatedcontent', node.offsetHeight >= 6);
  });

