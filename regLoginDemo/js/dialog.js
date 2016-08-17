/**
 * Created by situ on 2016/8/16.
 */

function Dialog() {

}

Dialog.prototype = {
    open: function(settings) {
        var $dialogWp = $('.dialog-wp'); // []
        if ($dialogWp.length == 0) {
            this.initHtml();
        }

        $('i.close').off('click').on('click', this.close);

        $('.dialog-header span').text(settings.title);

        $('.dialog-body').html(settings.content);

        $('.dialog-wp').show();
    },
    close: function() {
        $('.dialog-wp').hide();
    },
    initHtml: function() {

        var html = [
            '<div class="dialog-wp">',
                '<div class="masker"></div>',
                '<div class="dialog">',
                    '<div class="dialog-header">',
                        '<span>对话框</span>',
                        '<i class="close">&times;</i>',
                    '</div>',
                    '<div class="dialog-body"></div>',
                '</div>',
            '</div>'
        ];

        $('body').append(html.join(''));

    }

};
