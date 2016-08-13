/**
 * Created by situ on 2016/8/12.
 */
define(function(require, exports, module) {

    console.log('nav...');

    var tab = require("plugins/tab");

    var r = tab.doTab();

    console.log(r);

    //

    var $ = require("jquery");

    console.log($);

    $('body').append("from nav.js");

    //

});