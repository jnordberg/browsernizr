/*!
{
  "name": "bdi Element",
  "property": "bdi",
  "notes": [{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi"
  }]
}
!*/
/* DOC
Detect support for the bdi element, a way to have text that is isolated from its possibly bidirectional surroundings
*/
var Modernizr = require('./../../lib/Modernizr.js');
var createElement = require('./../../lib/createElement.js');
var docElement = require('./../../lib/docElement.js');
var computedStyle = require('./../../lib/computedStyle.js');
  Modernizr.addTest('bdi', function() {
    var div = createElement('div');
    var bdi = createElement('bdi');

    bdi.innerHTML = '&#1573;';
    div.appendChild(bdi);

    docElement.appendChild(div);

    var supports = computedStyle(bdi, null, 'direction') === 'rtl';

    docElement.removeChild(div);

    return supports;
  });

