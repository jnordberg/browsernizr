/*!
{
  "name": "WebGL",
  "property": "webgl",
  "caniuse": "webgl",
  "tags": ["webgl", "graphics"],
  "polyfills": ["jebgl", "webglcompat", "cwebgl", "iewebgl"]
}
!*/

  Modernizr.addTest('webgl', function() {
    var canvas = createElement('canvas');
    if ('supportsContext' in canvas) {
      return canvas.supportsContext('webgl') || canvas.supportsContext('experimental-webgl');
    }
    return !!window.WebGLRenderingContext;
  });
