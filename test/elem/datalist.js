/*!
{
  "name": "datalist Element",
  "caniuse": "datalist",
  "property": "datalistelem",
  "tags": ["elem"],
  "builderAliases": ["elem_datalist"],
  "warnings": ["This test is a dupe of Modernizr.input.list. Only around for legacy reasons."],
  "notes": [{
    "name": "CSS Tricks Article",
    "href": "https://css-tricks.com/relevant-dropdowns-polyfill-for-datalist/"
  },{
    "name": "Mike Taylor Code",
    "href": "https://miketaylr.com/code/datalist.html"
  }]
}
!*/
var Modernizr = require('./../../lib/Modernizr.js');
  // lol. we already have a test for datalist built in! silly you.
  // Leaving it around in case anyone's using it

  Modernizr.addTest('datalistelem', Modernizr.input.list);

