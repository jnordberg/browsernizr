var Modernizr = require('./../../lib/Modernizr');
var testStyles = require('./../../lib/testStyles');

/*!
{
  "name": "Background Size Cover",
  "property": "bgsizecover",
  "tags": ["css"],
  "notes": [{
    "name" : "MDN Docs",
    "href": "http://developer.mozilla.org/en/CSS/background-size"
  }]
}
!*/


  testStyles('#modernizr{background-size:cover}', function( elem ) {
    var style = window.getComputedStyle ?
      window.getComputedStyle(elem, null)
      : elem.currentStyle;

    Modernizr.addTest('bgsizecover', style.backgroundSize == 'cover' );
  });


