/**
 * Created by situ on 2016/8/9.
 */
define(["mods/m1", "jquery"], function(m1, $) {

    //var $ = require("jquery");

    //console.log($);
    //
    $('body').append("<h1>测试一下jQuery2</h1>");

    //document.body.innerHTML = "<h1>测试一下jQuery</h1>";

    return {
        name: 'm1',
        hello: function() {
            return this.name;
        }
    }

});