var Modernizr = require('./../../lib/Modernizr');
var testStyles = require('./../../lib/testStyles');


  // https://github.com/Modernizr/Modernizr/issues/572
  // Similar to http://jsfiddle.net/FWeinb/etnYC/
  testStyles('#modernizr { height: 50vh; }', function( elem, rule ) {
    var height = parseInt(window.innerHeight/2,10);
    var compStyle = parseInt((window.getComputedStyle ?
                              getComputedStyle(elem, null) :
                              elem.currentStyle)['height'],10);
    Modernizr.addTest('cssvhunit', compStyle == height);
  });

