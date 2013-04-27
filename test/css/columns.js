var Modernizr = require('./../../lib/Modernizr');
var testAllProps = require('./../../lib/testAllProps');

/*!
{
  "name": "CSS Columns",
  "property": "csscolumns",
  "caniuse": "multicolumn",
  "polyfills": ["css3multicolumnjs"],
  "tags": ["css"]
}
!*/

  Modernizr.addTest('csscolumns', testAllProps('columnCount'));

