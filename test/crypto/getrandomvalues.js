/*!
{
  "name": "getRandomValues",
  "property": "getrandomvalues",
  "caniuse": "getrandomvalues",
  "tags": ["crypto"],
  "authors": ["komachi"],
  "notes": [{
    "name": "W3C Editor’s Draft Spec",
    "href": "https://w3c.github.io/webcrypto/#Crypto-interface-methods"
  }],
  "polyfills": ["polycrypt"]
}
!*/
/* DOC
Detects support for the window.crypto.getRandomValues method for generating cryptographically secure random numbers
*/
var Modernizr = require('./../../lib/Modernizr.js');
var prefixed = require('./../../lib/prefixed.js');
var is = require('./../../lib/is.js');
  // In Safari <=5.0 `window.crypto` exists (for some reason) but is `undefined`, so we have to check
  // it’s truthy before checking for existence of `getRandomValues`
  var crypto = prefixed('crypto', window);
  var supportsGetRandomValues;

  // Safari 6.0 supports crypto.getRandomValues, but does not return the array,
  // which is required by the spec, so we need to actually check.
  if (crypto && 'getRandomValues' in crypto && 'Uint32Array' in window) {
    var array = new Uint32Array(10);
    var values = crypto.getRandomValues(array);
    supportsGetRandomValues = values && is(values[0], 'number');
  }

  Modernizr.addTest('getrandomvalues', !!supportsGetRandomValues);

