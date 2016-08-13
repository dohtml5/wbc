/**
 * Created by situ on 2016/8/12.
 */
requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery/jquery-3.1.0.min'
    }
});

requirejs(["widgets/dialog"], function(dialog) {

    // dialog.init();

    // console.log($);

    $('button').on('click', function() {
        var html = [
            '<label>姓名：<input type="text"></label>',
            '<h1>我是对话框内容22222</h1>'
        ];
        dialog.showDialog(html.join(''));
        //dialog.showDialog();
    });

    $('span').on('click', function() {
        dialog.showDialog('<h1>我是对话框内容33333</h1>');
        //dialog.showDialog();
    });

});