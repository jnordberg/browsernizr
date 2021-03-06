/*!
{
  "name": "Track element and Timed Text Track",
  "property": ["texttrackapi", "track"],
  "tags": ["elem"],
  "builderAliases": ["elem_track"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "W3C Spec (Track Element)",
    "href": "https://web.archive.org/web/20121119095019/http://www.w3.org/TR/html5/the-track-element.html#the-track-element"
  },{
    "name": "W3C Spec (Track API)",
    "href": "https://web.archive.org/web/20121119094620/http://www.w3.org/TR/html5/media-elements.html#text-track-api"
  }],
  "warnings": ["While IE10 has implemented the track element, IE10 does not expose the underlying APIs to create timed text tracks by JS (really sad)"]
}
!*/
var Modernizr = require('./../../lib/Modernizr.js');
var createElement = require('./../../lib/createElement.js');
  Modernizr.addTest('texttrackapi', typeof (createElement('video').addTextTrack) === 'function');

  // a more strict test for track including UI support: document.createElement('track').kind === 'subtitles'
  Modernizr.addTest('track', 'kind' in createElement('track'));

