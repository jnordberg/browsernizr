var Modernizr = require('./../lib/Modernizr');
var prefixed = require('./../lib/prefixed');


  // Dart
  // By Theodoor van Donge
  // https://chromiumcodereview.appspot.com/9232049/

  Modernizr.addTest('dart', !!prefixed('startDart', navigator));

