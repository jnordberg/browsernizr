/*!
{
  "name": "ES5 Strict Mode",
  "property": "strictmode",
  "caniuse": "use-strict",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "https://www.ecma-international.org/ecma-262/5.1/"
  }],
  "authors": ["@kangax"],
  "tags": ["es5"],
  "builderAliases": ["es5_strictmode"]
}
!*/
/* DOC
Check if browser implements ECMAScript 5 Object strict mode.
*/
var Modernizr = require('./../../lib/Modernizr.js');
  Modernizr.addTest('strictmode', (function() {'use strict'; return !this; })());

