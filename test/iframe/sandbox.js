/*!
{
  "name": "iframe[sandbox] Attribute",
  "property": "sandbox",
  "tags": ["iframe"],
  "builderAliases": ["iframe_sandbox"],
  "notes": [
    "False-positive on Firefox < 29",
  {
    "name": "WhatWG Spec",
    "href": "http://www.whatwg.org/specs/web-apps/current-work/multipage/the-iframe-element.html#attr-iframe-sandbox"
  }]
}
!*/
/* DOC
Test for `sandbox` attribute in iframes.
*/

  Modernizr.addTest('sandbox', 'sandbox' in createElement('iframe'));
