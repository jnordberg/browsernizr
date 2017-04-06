/*!
{
  "name": "Pointer Media Query",
  "property": "pointermq",
  "notes": [{
    "name": "//Name of reference document",
    "href": "//URL of reference document"
  }]
}
!*/
/* DOC
Detect support for Pointer based media queries
*/
var Modernizr = require('./../../lib/Modernizr.js');
var addTest = require('./../../lib/addTest.js');
var mq = require('./../../lib/mq.js');
  Modernizr.addTest('pointermq', mq(('(pointer:coarse),(pointer:fine),(pointer:none)')));

