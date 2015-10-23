/*!
{
  "name": "XHR responseType='json'",
  "property": "xhrresponsetypejson",
  "tags": ["network"],
  "notes": [{
    "name": "XMLHttpRequest Living Standard",
    "href": "http://xhr.spec.whatwg.org/#the-responsetype-attribute"
  },{
    "name": "Explanation of xhr.responseType='json'",
    "href": "http://mathiasbynens.be/notes/xhr-responsetype-json"
  }]
}
!*/
/* DOC
Tests for XMLHttpRequest xhr.responseType='json'.
*/
var Modernizr = require('./../../lib/Modernizr.js');
var testXhrType = require('./../../lib/testXhrType.js');
  Modernizr.addTest('xhrresponsetypejson', testXhrType('json'));

