/**
 * Created by situ on 2016/8/12.
 */
requirejs.config({
    baseUrl: 'js'
});

////////////////////////////////////////////

requirejs(["mods/dialog", "plugins/slider", "util/util1", "util/util2", "mods/nav"], function(dialog, slider, util1, util2, nav) {

    dialog.show();

    // ...

    slider();

    // ...

    var a = 32;

    console.log(util1.fill0(a));

    // ...

    var d = new Date();

    var dArr = util2.getDateArr(d);

    console.log(dArr[0] + "-" + util1.fill0(dArr[1]) + "-" + dArr[2]);

});