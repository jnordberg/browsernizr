/*!
{
  "name": "Internationalization API",
  "property": "intl",
  "notes": [{
     "name": "MDN Docs",
     "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"
   },{
     "name": "ECMAScript spec",
     "href": "https://www.ecma-international.org/ecma-402/1.0/"
  }]
}
 !*/
/* DOC
Detects support for the Internationalization API which allow easy formatting of number and dates and sorting string
based on a locale
*/
var Modernizr = require('./../lib/Modernizr.js');
var prefixed = require('./../lib/prefixed.js');
  Modernizr.addTest('intl', !!prefixed('Intl', window));

