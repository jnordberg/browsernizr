var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');


  // testing for placeholder attribute in inputs and textareas
  Modernizr.addTest('placeholder', ('placeholder' in createElement('input') && 'placeholder' in createElement('textarea')));

