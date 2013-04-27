var Modernizr = require('./../lib/Modernizr');
var docElement = require('./../lib/docElement');


  // http://www.w3.org/TR/html5/interactive-elements.html#context-menus
  // Demo at http://thewebrocks.com/demos/context-menu/
  Modernizr.addTest(
    'contextmenu',
    ('contextMenu' in docElement && 'HTMLMenuItemElement' in window)
  );

