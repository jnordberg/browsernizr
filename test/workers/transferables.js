var Modernizr = require('./../../lib/Modernizr');
var addTest = require('./../../lib/addTest');
require('./../../lib/test/blob');
require('./../../lib/test/url/bloburls');
require('./../../lib/test/workers/webworkers');
require('./../../lib/test/typed-arrays');

/*!
{
  "name": "Transferables Objects",
  "property": "transferables",
  "tags": ["performance", "workers"],
  "builderAliases": ["transferables"],
  "notes": [{
    "name": "HTML5 Rocks article",
    "href": "http://updates.html5rocks.com/2011/12/Transferable-Objects-Lightning-Fast"
  }],
  "async": true
}
!*/
/* DOC
Detects whether web workers can use `transferables` objects.
*/

  Modernizr.addAsyncTest(function() {
    var prerequisites = !!(Modernizr.blobconstructor &&
                           Modernizr.bloburls &&
                           Modernizr.webworkers &&
                           Modernizr.typedarrays);

    // Early exit
    if (!prerequisites) {
      return addTest('transferables', false);
    }

    // Proper test if prerequisites are met
    try {
      var buffer,
          scriptText = 'var hello = "world"',
          blob = new Blob([scriptText], {type: 'text/javascript'}),
          url = URL.createObjectURL(blob),
          worker = new Worker(url),
          timeout;

      // Just in case...
      worker.onerror = fail;
      timeout = setTimeout(fail, 200);

      // Building an minimal array buffer to send to the worker
      buffer = new ArrayBuffer(1);

      // Sending the buffer to the worker
      worker.postMessage(buffer, [buffer]);

      // If length of buffer is now 0, transferables are working
      addTest('transferables', buffer.byteLength === 0);
      cleanup();
    } catch (e) {
      fail();
    }

    function fail() {
      addTest('transferables', false);
      cleanup();
    }

    function cleanup() {
      if (url) {
        URL.revokeObjectURL(url);
      }
      if (worker) {
        worker.terminate();
      }
      if (timeout) {
        clearTimeout(timeout);
      }
    }
  });

