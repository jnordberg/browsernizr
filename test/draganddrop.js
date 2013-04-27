var Modernizr = require('./../lib/Modernizr');
var createElement = require('./../lib/createElement');


  // http://dev.w3.org/html5/spec/dnd.html

  Modernizr.addTest('draganddrop', function() {
    var div = createElement('div');
    return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
  });

