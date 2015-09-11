var Modernizr = require('./../../lib/Modernizr');
var createElement = require('./../../lib/createElement');
var testStyles = require('./../../lib/testStyles');

/*!
{
  "name": "CSS :checked pseudo-selector",
  "caniuse": "css-sel3",
  "property": "checked",
  "tags": ["css"],
  "notes": [{
    "name": "Related Github Issue",
    "href": "https://github.com/Modernizr/Modernizr/pull/879"
  }]
}
!*/

  Modernizr.addTest('checked', function(){
    return testStyles('#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}', function( elem ){
      var cb = createElement('input');
      cb.setAttribute('type', 'checkbox');
      cb.setAttribute('checked', 'checked');
      elem.appendChild(cb);
      return cb.offsetLeft === 20;
    });
  });

