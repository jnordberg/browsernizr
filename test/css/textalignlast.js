/*!
{
  "name": "CSS text-align-last",
  "property": "textalignlast",
  "tags": ["css"],
  "knownBugs": ["IE does not support the 'start' or 'end' values."],
  "notes": [{
      "name": "Quirksmode",
      "href": "https://www.quirksmode.org/css/text/textalignlast.html"
    },{
      "name": "MDN Docs",
      "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/text-align-last"
  }]
}
!*/
var Modernizr = require('./../../lib/Modernizr.js');
var testAllProps = require('./../../lib/testAllProps.js');
  Modernizr.addTest('textalignlast', testAllProps('textAlignLast'));

