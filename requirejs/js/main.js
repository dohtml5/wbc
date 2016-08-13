/**
 * Created by situ on 2016/8/12.
 */
requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery/jquery-3.1.0.min',
        dialog: 'mods/dialog'
    }
});

////////////////////////////////////////////

requirejs(["dialog", "plugins/slider", "util/util1", "util/util2", "mods/nav", "widgets/dialog"], function(dialog, slider, util1, util2, nav, dialog2) {

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

    // ...

    // $('body').append("<h1>jQuery test2</h1>");

    // dialog2.init();

    $('.my-div').on('click', function() {
        dialog2.showDialog('<h1>我是对话框内容2</h1>');
        // dialog2.showDialog();
    });
    // dialog2.setContent('<h1>我是对话框内容</h1>');

});