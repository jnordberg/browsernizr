/*!
{
  "property": "speechsynthesis",
  "tags": ["input", "speech"],
  "authors": ["Cătălin Mariș"],
  "name": "Speech Synthesis API",
  "notes": [{
    "name": "W3C Spec",
    "href": "https://w3c.github.io/speech-api/speechapi.html#tts-section"
  }]
}
!*/

var Modernizr = require('./../../lib/Modernizr.js');
  Modernizr.addTest('speechsynthesis', 'SpeechSynthesisUtterance' in window);

