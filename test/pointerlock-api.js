var Modernizr = require('./../lib/Modernizr');
var prefixed = require('./../lib/prefixed');


  // https://developer.mozilla.org/en-US/docs/API/Pointer_Lock_API
  Modernizr.addTest('pointerlock', !!prefixed('exitPointerLock', document));

