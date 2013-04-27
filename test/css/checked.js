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
   return testStyles('#modernizr input {width:100px} #modernizr :checked {width:200px;display:block}', function(elem, rule){
      var cb = createElement('input');
      cb.setAttribute("type", "checkbox");
      cb.setAttribute("checked", "checked");
      elem.appendChild(cb);
      return cb.offsetWidth == 200;
    });
  });

