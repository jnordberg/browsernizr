var Modernizr = require('./../lib/Modernizr');
var prefixed = require('./../lib/prefixed');


  // Battery API
  // https://developer.mozilla.org/en/DOM/window.navigator.mozBattery
  // By: Paul Sayre
  Modernizr.addTest('batteryapi', !!prefixed('battery', navigator), { aliases: ['battery-api'] });

