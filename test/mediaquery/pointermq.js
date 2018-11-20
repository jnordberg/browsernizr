/*!
{
  "name": "Pointer Media Query",
  "property": "pointermq"
}
!*/
/* DOC
Detect support for Pointer based media queries
*/
var Modernizr = require('./../../lib/Modernizr.js');
var addTest = require('./../../lib/addTest.js');
var mq = require('./../../lib/mq.js');
  Modernizr.addTest('pointermq', mq(('(pointer:coarse),(pointer:fine),(pointer:none)')));

