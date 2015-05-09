var docElement = require('./docElement');


  var isSVG = docElement.nodeName.toLowerCase() === 'svg';
  

module.exports = isSVG;