/*!
{
  "name": "input formnovalidate",
  "property": "inputformnovalidate",
  "aliases": ["input-formnovalidate"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formnovalidate"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/formnovalidate-attribute/"
  }],
  "polyfills": ["html5formshim"]
}
!*/
/* DOC
Detect support for the formnovalidate attribute on form inputs, which overrides the form novalidate attribute
*/
var Modernizr = require('./../../lib/Modernizr.js');
var createElement = require('./../../lib/createElement.js');
  Modernizr.addTest('inputformnovalidate', !!('formNoValidate' in createElement('input')), {aliases: ['input-formnovalidate']});

