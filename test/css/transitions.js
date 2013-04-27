var Modernizr = require('./../../lib/Modernizr');
var testAllProps = require('./../../lib/testAllProps');


  Modernizr.addTest('csstransitions', testAllProps('transition'));

