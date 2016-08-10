/**
 * Created by situ on 2016/8/9.
 */
define(function(require, exports, module) {

    console.log("util");

    var m1 = require("mods/m1");

    console.log(m1.name);

    console.log(m1.hello());

    ////////////////////////////////////////////

    console.log(require);
    console.log(exports);
    console.log(module);

    ////////////////////////////////////////////



});