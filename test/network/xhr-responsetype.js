/*!
{
  "name": "XHR responseType",
  "property": "xhrresponsetype",
  "tags": ["network"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
/* DOC
Tests for XMLHttpRequest xhr.responseType.
*/
var Modernizr = require('./../../lib/Modernizr.js');
  Modernizr.addTest('xhrresponsetype', (function() {
    if (typeof XMLHttpRequest === 'undefined') {
      return false;
    }
    var xhr = new XMLHttpRequest();
    xhr.open('get', '/', true);
    return 'response' in xhr;
  }()));

