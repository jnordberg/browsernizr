/*!
{
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "cwebgl", "iewebgl"]
}
!*/
var Modernizr = require('./../lib/Modernizr.js');
  Modernizr.addTest('webgl', function() {
    return 'WebGLRenderingContext' in window;
  });

