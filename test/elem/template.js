var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');


  // <template> HTML tag
  // http://www.html5rocks.com/en/tutorials/webcomponents/template/
  // https://dvcs.w3.org/hg/webcomponents/raw-file/tip/spec/templates/index.html
  Modernizr.addTest('template', 'content' in createElement('template'));

