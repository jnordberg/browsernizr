/*!
{
  "name": "input formenctype",
  "property": "inputformenctype",
  "aliases": ["input-formenctype"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formenctype"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/formenctype-attribute/"
  }],
  "polyfills": ["html5formshim"]
}
!*/
/* DOC
Detect support for the formenctype attribute on form inputs, which overrides the form enctype attribute
*/
var Modernizr = require('./../../lib/Modernizr.js');
var createElement = require('./../../lib/createElement.js');
  Modernizr.addTest('inputformenctype', !!('formEnctype' in createElement('input')), {aliases: ['input-formenctype']});

