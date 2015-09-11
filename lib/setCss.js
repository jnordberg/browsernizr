var Modernizr = require('./Modernizr');
var mStyle = require('./mStyle');


  /**
   * setCss applies given styles to the Modernizr DOM node.
   */
  function setCss( str ) {
    mStyle.style.cssText = str;
  }


  

module.exports = setCss;