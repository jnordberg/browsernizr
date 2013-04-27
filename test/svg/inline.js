var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');


  // specifically for SVG inline in HTML, not within XHTML
  // test page: paulirish.com/demo/inline-svg
  Modernizr.addTest('inlinesvg', function() {
    var div = createElement('div');
    div.innerHTML = '<svg/>';
    return (div.firstChild && div.firstChild.namespaceURI) == 'http://www.w3.org/2000/svg';
  });

