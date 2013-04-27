var Modernizr = require('./../../lib/Modernizr');
var prefixed = require('./../../lib/prefixed');


  // getUserMedia
  // http://www.whatwg.org/specs/web-apps/current-work/multipage/video-conferencing-and-peer-to-peer-communication.html
  // By Eric Bidelman

  Modernizr.addTest('getusermedia', !!prefixed('getUserMedia', navigator));

