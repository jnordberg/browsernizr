var Modernizr = require('./../lib/Modernizr');
var createElement = require('./../lib/createElement');
var isSVG = require('./../lib/isSVG');

/*!
{
  "name": "VML",
  "property": "vml",
  "caniuse": "vml",
  "tags": ["vml"],
  "authors": ["Craig Andrews (@candrews)"],
  "notes": [{
    "name" : "W3C VML reference",
    "href": "http://www.w3.org/TR/NOTE-VML"
  },{
    "name" : "Microsoft VML reference",
    "href": "http://msdn.microsoft.com/en-us/library/bb263898%28VS.85%29.aspx"
  }]
}
!*/
/* DOC
Detects support for VML.
*/

  Modernizr.addTest('vml', function() {
    var containerDiv = createElement('div');
    var supports = false;
    var shape;

    if (!isSVG) {
      containerDiv.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
      shape = containerDiv.firstChild;
      shape.style.behavior = 'url(#default#VML)';
      supports = shape ? typeof shape.adj == 'object': true;
    }

    return supports;
  });

