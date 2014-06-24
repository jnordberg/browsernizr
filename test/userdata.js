var Modernizr = require('./../lib/Modernizr');
var createElement = require('./../lib/createElement');

/*!
{
  "name": "IE User Data API",
  "property": "userdata",
  "tags": ["storage"],
  "authors": ["@stereobooster"],
  "notes": [{
    "name": "MSDN Documentation",
    "href": "http://msdn.microsoft.com/en-us/library/ms531424(v=vs.85).aspx"
  }]
}
!*/
/* DOC
Detects support for IE userData for persisting data, an API similar to localStorage but supported since IE5.
*/

  Modernizr.addTest('userdata', !!createElement('div').addBehavior);

