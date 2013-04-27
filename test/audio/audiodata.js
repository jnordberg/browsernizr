var Modernizr = require('./../../lib/Modernizr');

/*!
{
  "name": "Audio Data API",
  "property": "audiodata",
  "polyfills": ["xaudiojs", "dynamicaudiojs", "audiolibjs"],
  "tags": ["audio", "media"],
  "authors": ["Addy Osmani"],
  "notes": [{
    "name": "API Documentation",
    "href": "https://wiki.mozilla.org/Audio_Data_API"
  }]
}
!*/

  Modernizr.addTest('audiodata', !!window.Audio);

