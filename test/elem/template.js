/*!
{
  "name": "Template Tag",
  "property": "template",
  "tags": ["elem"],
  "notes": [{
    "name": "HTML5Rocks Article",
    "href": "https://www.html5rocks.com/en/tutorials/webcomponents/template/"
  },{
    "name": "W3C Spec",
    "href": "https://web.archive.org/web/20171130222649/http://www.w3.org/TR/html5/scripting-1.html"
  }]
}
!*/
var Modernizr = require('./../../lib/Modernizr.js');
var createElement = require('./../../lib/createElement.js');
  Modernizr.addTest('template', 'content' in createElement('template'));

