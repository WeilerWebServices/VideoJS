/* ! @name videojs-test @version 1.0.0 @license Apache-2.0 */
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('video.js')) :
  typeof define === 'function' && define.amd ? define(['video.js'], factory) :
  (global.videojsTest = factory(global.videojs));
}(this, (function(videojs) { 'use strict';

  videojs = videojs && videojs.hasOwnProperty('default') ? videojs['default'] : videojs;

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var version = '1.0.0';

  var Plugin = videojs.getPlugin('plugin'); // Default options for the plugin.

  var defaults = {};
  /**
   * An advanced Video.js plugin. For more information on the API
   *
   * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
   */

  var Test =
  /* #__PURE__*/
  function(_Plugin) {
    _inheritsLoose(Test, _Plugin);

    /**
     * Create a Test plugin instance.
     *
     * @param  {Player} player
     *         A Video.js Player instance.
     *
     * @param  {Object} [options]
     *         An optional options object.
     *
     *         While not a core part of the Video.js plugin architecture, a
     *         second argument of options is a convenient way to accept inputs
     *         from your plugin's caller.
     */
    function Test(player, options) {
      var _this;

      // the parent class will add player under this.player
      _this = _Plugin.call(this, player) || this;
      _this.options = videojs.mergeOptions(defaults, options);

      _this.player.ready(function() {
        _this.player.addClass('vjs-test');
      });

      return _this;
    }

    return Test;
  }(Plugin); // Define default values for the plugin's `state` object here.

  Test.defaultState = {}; // Include the version number.

  Test.VERSION = version; // Register the plugin with video.js.

  videojs.registerPlugin('test', Test);

  return Test;

})));
