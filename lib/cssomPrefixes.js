var ModernizrProto = require('./ModernizrProto');
var omPrefixes = require('./omPrefixes');


  var cssomPrefixes = (ModernizrProto._config.usePrefixes ? omPrefixes.split(' ') : []);
  ModernizrProto._cssomPrefixes = cssomPrefixes;
  

module.exports = cssomPrefixes;