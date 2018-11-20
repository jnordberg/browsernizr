/*!
{
  "name": "Custom protocol handler",
  "property": "customprotocolhandler",
  "authors": ["Ben Schwarz"],
  "builderAliases": ["custom_protocol_handler"],
  "notes": [{
    "name": "WHATWG Spec",
    "href": "https://html.spec.whatwg.org/dev/system-state.html#custom-handlers"
  },{
    "name": "MDN Docs",
    "href": "https://developer.mozilla.org/en-US/docs/Web/API/navigator.registerProtocolHandler"
  }]
}
!*/
/* DOC
Detects support for the `window.registerProtocolHandler()` API to allow websites to register themselves as possible handlers for particular protocols.
*/
var Modernizr = require('./../lib/Modernizr.js');
  Modernizr.addTest('customprotocolhandler', function() {
    // early bailout where it doesn't exist at all
    if (!navigator.registerProtocolHandler) {
      return false;
    }

    // registerProtocolHandler was stubbed in webkit for a while, and didn't
    // actually do anything. We intentionally set it improperly to test for
    // the proper sort of failure
    try {
      navigator.registerProtocolHandler('thisShouldFail');
    }
    catch (e) {
      return e instanceof TypeError;
    }

    return false;
  });

