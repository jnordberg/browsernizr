/*!
{
  "name": "Filesystem API",
  "property": "filesystem",
  "caniuse": "filesystem",
  "notes": [{
    "name": "W3C Spec",
    "href": "https://www.w3.org/TR/file-system-api/"
  }],
  "authors": ["Eric Bidelman (@ebidel)"],
  "tags": ["file"],
  "builderAliases": ["file_filesystem"],
  "knownBugs": ["The API will be present in Chrome incognito, but will throw an exception. See crbug.com/93417"]
}
!*/
var Modernizr = require('./../../lib/Modernizr.js');
var prefixed = require('./../../lib/prefixed.js');
  Modernizr.addTest('filesystem', !!prefixed('requestFileSystem', window));

