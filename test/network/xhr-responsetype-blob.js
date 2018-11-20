/*!
{
  "name": "XHR responseType='blob'",
  "property": "xhrresponsetypeblob",
  "tags": ["network"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
/* DOC
Tests for XMLHttpRequest xhr.responseType='blob'.
*/
var Modernizr = require('./../../lib/Modernizr.js');
var testXhrType = require('./../../lib/testXhrType.js');
  Modernizr.addTest('xhrresponsetypeblob', testXhrType('blob'));

