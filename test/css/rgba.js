var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');


  // css-tricks.com/rgba-browser-support/

  Modernizr.addTest('rgba', function() {
    var elem = createElement('div');
    var style = elem.style;
    style.cssText = 'background-color:rgba(150,255,150,.5)';

    return ('' + style.backgroundColor).indexOf('rgba') > -1;
  });

