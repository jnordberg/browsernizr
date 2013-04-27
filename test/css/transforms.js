var Modernizr = require('./../../lib/Modernizr');
var testAllProps = require('./../../lib/testAllProps');


  Modernizr.addTest('csstransforms', !!testAllProps('transform'));

