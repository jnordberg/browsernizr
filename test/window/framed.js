var Modernizr = require('./../../lib/Modernizr');

/*!
{
  "name": "Framed window",
  "property": "framed",
  "tags": ["window"],
  "builderAliases": ["window_framed"]
}
!*/
/* DOC
Tests if page is iframed.
*/

  // github.com/Modernizr/Modernizr/issues/242

  Modernizr.addTest('framed', window.location != top.location);

