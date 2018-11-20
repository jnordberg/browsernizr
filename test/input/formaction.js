/*!
{
  "name": "input formaction",
  "property": "inputformaction",
  "aliases": ["input-formaction"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fs-formaction"
  }, {
    "name": "Wufoo demo",
    "href": "https://www.wufoo.com/html5/formaction-attribute/"
  }],
  "polyfills": ["webshims"]
}
!*/
/* DOC
Detect support for the formaction attribute on form inputs
*/
var Modernizr = require('./../../lib/Modernizr.js');
var createElement = require('./../../lib/createElement.js');
  Modernizr.addTest('inputformaction', !!('formAction' in createElement('input')), {aliases: ['input-formaction']});

