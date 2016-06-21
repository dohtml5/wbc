/**
 * Created by Administrator on 2016/3/18 0018.
 */
!function(window, document, $, undefined) {

    var students = '程红岩 董荣 雷亚超 李晓辉 李振亚 王云 王子文 张晓慧 郭强'.split(' '),
        urls = [
            'http://www.mia.com/(密芽)',
            'http://www.mogujie.com/(蘑菇街)',
            'http://www.zhe800.com/(折800)',
            'http://www.mafengwo.cn/(马蜂窝)',
            'http://www.haibao.com/(海报时尚网)',
            'http://y.qq.com/#type=index(qq音乐)',
            'http://beijing.haodai.com/(好贷网)',
            'http://huayu.baidu.com/(百度书城)',
            'http://www.xin.com/beijing/(优信二手车)'
        ],
        timer;

    $('button.start').on('click', function() {

        $('.info').hide();

        timer = setInterval(function () {
            students = randomArray(students);
            urls = randomArray(urls);
            render(students, '姓名', 'students');
            render(urls, '地址', 'urls');
        }, 10);

    });

    $('button.stop').on('click', function() {

        clearInterval(timer);

    });

    var render = function(arr, label, renderId) {
        var html = [];
        $.each(arr, function(i, item) {
            html.push('<li>', label, '：', item, '</li>');
        });
        $('#' + renderId).html(html.join(''));
    };

    var randomArray = function(arr) {
        return arr.sort(function(){return Math.random() > 0.5});
    };

}(window, document, jQuery);