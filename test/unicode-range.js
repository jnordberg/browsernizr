var Modernizr = require('./../lib/Modernizr');
var testStyles = require('./../lib/testStyles');
var createElement = require('./../lib/createElement');

/*!
{
  "name": "Unicode Range",
  "property": "unicoderange",
  "notes": [{
    "name" : "W3C reference",
    "href": "http://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#descdef-unicode-range"
  }, {
    "name" : "24 Way article",
    "href": "http://24ways.org/2011/creating-custom-font-stacks-with-unicode-range"
  }]
}
!*/

  Modernizr.addTest('unicoderange', function () {

    return Modernizr.testStyles('@font-face{font-family:"unicodeRange";src:local("Arial");unicode-range:U+002E}#modernizr span{font-size:10px;display:inline-block;font-family:"unicodeRange",monospace}#modernizr .mono{font-family:monospace}', function (elem) {

      // we use specify a unicode-range of 002E (the `.` glyph,
      // and a monospace font as the fallback. If the first of
      // these test glyphs is a different width than the other
      // the other three (which are all monospace), then we 
      // have a winner.
      var testGlyphs = ['.', '.', 'm', 'm'];

      for (var i = 0; i < testGlyphs.length; i++) {
        var elm = createElement('span');
        elm.innerHTML = testGlyphs[i];
        elm.className = i % 2 ? 'mono' : '';
        elem.appendChild(elm);
        testGlyphs[i] = elm.clientWidth;
      }

      return (testGlyphs[0] !== testGlyphs[1] && testGlyphs[2] === testGlyphs[3]);
    });
  });

