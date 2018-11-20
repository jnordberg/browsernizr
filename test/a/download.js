/*!
{
  "name": "a[download] Attribute",
  "property": "adownload",
  "caniuse": "download",
  "tags": ["media", "attribute"],
  "builderAliases": ["a_download"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://developers.whatwg.org/links.html#downloading-resources"
  }]
}
!*/
/* DOC
When used on an `<a>`, this attribute signifies that the resource it points to should be downloaded by the browser rather than navigating to it.
*/
var Modernizr = require('./../../lib/Modernizr.js');
var createElement = require('./../../lib/createElement.js');
  Modernizr.addTest('adownload', !window.externalHost && 'download' in createElement('a'));

