/*!
{
  "name": "Variable Open Type Fonts",
  "property": "variablefonts",
  "authors": ["Patrick Kettner"],
  "tags": ["css"],
  "notes": [{
    "name": "Variable fonts on the web",
    "href": "https://webkit.org/blog/7051/variable-fonts-on-the-web/"
  }, {
    "name": "Variable fonts for responsive design",
    "href": "https://alistapart.com/blog/post/variable-fonts-for-responsive-design"
  }]
}
!*/
var Modernizr = require('./../../lib/Modernizr.js');
var testAllProps = require('./../../lib/testAllProps.js');
  Modernizr.addTest('variablefonts', testAllProps('fontVariationSettings'));

