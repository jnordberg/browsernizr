var Modernizr = require('./../lib/Modernizr');
var createElement = require('./../lib/createElement');


  // Canvas
  // On the S60 and BB Storm, getContext exists, but always returns undefined
  // so we actually have to call getContext() to verify
  // github.com/Modernizr/Modernizr/issues/issue/97/

  Modernizr.addTest('canvas', function() {
    var elem = createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  });

