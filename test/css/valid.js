/*!
{
  "name": "CSS :valid pseudo-class",
  "property": "cssvalid",
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/CSS/:valid"
  }]
}
!*/
/* DOC
  Detects support for the ':valid' CSS pseudo-class.
*/
var Modernizr = require('./../../lib/Modernizr.js');
var testStyles = require('./../../lib/testStyles.js');
var createElement = require('./../../lib/createElement.js');
  Modernizr.addTest('cssvalid', function() {
    return testStyles('#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px}', function(elem) {
      var input = createElement('input');
      elem.appendChild(input);
      return input.clientWidth > 10;
    });
  });

