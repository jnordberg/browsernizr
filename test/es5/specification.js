var Modernizr = require('./../../lib/Modernizr');
require('./../../lib/test/es5/array');
require('./../../lib/test/es5/date');
require('./../../lib/test/es5/function');
require('./../../lib/test/es5/object');
require('./../../lib/test/es5/strictmode');
require('./../../lib/test/es5/string');
require('./../../lib/test/json');
require('./../../lib/test/es5/syntax');
require('./../../lib/test/es5/undefined');

/*!
{
  "name": "ES5",
  "property": "es5",
  "notes": [{
    "name": "ECMAScript 5.1 Language Specification",
    "href": "http://www.ecma-international.org/ecma-262/5.1/"
  }],
  "polyfills": ["es5shim", "es5sham"],
  "authors": ["Ron Waldon (@jokeyrhyme)"],
  "tags": ["es5"]
}
!*/
/* DOC
Check if browser implements everything as specified in ECMAScript 5.
*/

  Modernizr.addTest('es5', function () {
    return !!(
      Modernizr.es5array &&
      Modernizr.es5date &&
      Modernizr.es5function &&
      Modernizr.es5object &&
      Modernizr.strictmode &&
      Modernizr.es5string &&
      Modernizr.json &&
      Modernizr.es5syntax &&
      Modernizr.es5undefined
    );
  });

