/*!
{
  "name": "CSS Cubic Bezier Range",
  "property": "cubicbezierrange",
  "tags": ["css"],
  "builderAliases": ["css_cubicbezierrange"],
  "authors": ["@calvein"],
  "warnings": ["cubic-bezier values can't be > 1 for Webkit until [bug #45761](https://bugs.webkit.org/show_bug.cgi?id=45761) is fixed"],
  "notes": [{
    "name": "Comprehensive Compat Chart",
    "href": "https://muddledramblings.com/table-of-css3-border-radius-compliance/"
  }]
}
!*/
var Modernizr = require('./../../lib/Modernizr.js');
var createElement = require('./../../lib/createElement.js');
var prefixes = require('./../../lib/prefixes.js');
  Modernizr.addTest('cubicbezierrange', function() {
    var el = createElement('a');
    el.style.cssText = prefixes.join('transition-timing-function:cubic-bezier(1,0,0,1.1); ');
    return !!el.style.length;
  });

