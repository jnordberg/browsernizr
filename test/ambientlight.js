/*!
{
  "name": "Ambient Light Events",
  "property": "ambientlight",
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/ambient-light/"
  }]
}
!*/
/* DOC
Detects support for the API that provides information about the ambient light levels, as detected by the device's light detector, in terms of lux units.
*/
var Modernizr = require('./../lib/Modernizr.js');
var hasEvent = require('./../lib/hasEvent.js');
  Modernizr.addTest('ambientlight', hasEvent('devicelight', window));

