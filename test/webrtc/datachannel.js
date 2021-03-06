/*!
{
  "name": "RTC Data Channel",
  "property": "datachannel",
  "notes": [{
    "name": "HTML5 Rocks Tutorial",
    "href": "https://www.html5rocks.com/en/tutorials/webrtc/datachannels/"
  }]
}
!*/
/* DOC
Detect for the RTCDataChannel API that allows for transfer data directly from one peer to another
*/
var Modernizr = require('./../../lib/Modernizr.js');
var prefixed = require('./../../lib/prefixed.js');
var domPrefixes = require('./../../lib/domPrefixes.js');
  Modernizr.addTest('datachannel', function() {
    if (!Modernizr.peerconnection) {
      return false;
    }
    for (var i = 0, l = domPrefixes.length; i < l; i++) {
      var PeerConnectionConstructor = window[domPrefixes[i] + 'RTCPeerConnection'];

      if (PeerConnectionConstructor) {
        var peerConnection = new PeerConnectionConstructor(null);

        return 'createDataChannel' in peerConnection;
      }

    }
    return false;
  });

