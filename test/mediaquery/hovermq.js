/*!
{
  "name": "Hover Media Query",
  "property": "hovermq"
}
!*/
/* DOC
Detect support for Hover based media queries
*/
var Modernizr = require('./../../lib/Modernizr.js');
var addTest = require('./../../lib/addTest.js');
var mq = require('./../../lib/mq.js');
  Modernizr.addTest('hovermq', mq('(hover)'));

