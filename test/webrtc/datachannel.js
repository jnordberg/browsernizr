var Modernizr = require('./../../lib/Modernizr');
var prefixed = require('./../../lib/prefixed');
var domPrefixes = require('./../../lib/domPrefixes');
require('./../../test/webrtc/peerconnection');

/*!
{
  "name": "RTC Data Channel",
  "property": "datachannel",
  "notes": [{
    "name": "HTML5 Rocks! Article",
    "href": "http://www.html5rocks.com/en/tutorials/webrtc/datachannels/"
  }]
}
!*/
/* DOC
Detect for the RTCDataChannel API that allows for transfer data directly from one peer to another
*/


  Modernizr.addTest('datachannel', function() {
    if (!Modernizr.peerconnection) {
      return false;
    }
    for (var i = 0, l = domPrefixes.length; i < l; i++) {
      var peerConnectionConstructor = window[domPrefixes[i] + 'RTCPeerConnection'];

      if (peerConnectionConstructor) {
        var peerConnection = new peerConnectionConstructor({
          'iceServers': [{ 'url': 'stun:0' }]
        });

        return 'createDataChannel' in peerConnection;
      }

    }
    return false;
  });

