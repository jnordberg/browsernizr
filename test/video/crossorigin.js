/*!
{
  "name": "Video crossOrigin",
  "property": "videocrossorigin",
  "caniuse": "cors",
  "authors": ["Florian Mailliet"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes"
  }]
}
!*/
/* DOC
Detects support for the crossOrigin attribute on video tag
*/
var Modernizr = require('./../../lib/Modernizr.js');
var createElement = require('./../../lib/createElement.js');
  Modernizr.addTest('videocrossorigin', 'crossOrigin' in createElement('video'));

