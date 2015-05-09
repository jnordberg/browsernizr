var Modernizr = require('./../../lib/Modernizr');
var testXhrType = require('./../../lib/testXhrType');

/*!
{
  "name": "XHR responseType='document'",
  "property": "xhrresponsetypedocument",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
  }]
}
!*/
/* DOC
Tests for XMLHttpRequest xhr.responseType='document'.
*/

  Modernizr.addTest('xhrresponsetypedocument', testXhrType('document'));

