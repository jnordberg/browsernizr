/*!
{
  "name": "Hover Media Query",
  "property": "hovermq",
  "notes": [{
    "name": "//Name of reference document",
    "href": "//URL of reference document"
  }]
}
!*/
/* DOC
Detect support for Hover based media queries
*/
var Modernizr = require('./../../lib/Modernizr.js');
var addTest = require('./../../lib/addTest.js');
var mq = require('./../../lib/mq.js');
  Modernizr.addTest('hovermq', mq(('(hover)')));

