/*!
{
  "name": "Audio Preload Attribute",
  "property": "audiopreload",
  "tags": ["audio", "media"]
}
!*/
/* DOC
Detects if audio can be downloaded in the background before it starts playing in the `<audio>` element
*/
var Modernizr = require('./../../lib/Modernizr.js');
var createElement = require('./../../lib/createElement.js');
  Modernizr.addTest('audiopreload', 'preload' in createElement('audio'));

