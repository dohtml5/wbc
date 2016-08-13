/**
 * Created by situ on 2016/8/12.
 */
define(["jquery"], function($) {

    var Dialog = {
        init: function() {
            // $('[data-action="dialog"]').on('click', this.showDialog);
            $('body').on('click', '.masker-wp .close', this.hideDialog);
            this.initHTML();
        },
        hideDialog: function() {
            $('.masker-wp').hide();
        },
        showDialog: function(str) {
            $('.masker-wp .dialog-body').html(str);
            $('.masker-wp').show();
        },
        initHTML: function() {
            if ($('.masker-wp').length > 0) {
                return;
            }

            var html = [
                '<div class="masker-wp">',
                '<div class="masker"></div>',
                '<div class="dialog">',
                    '<div class="dialog-header"><i class="close">&times;</i></div>',
                    '<div class="dialog-body"></div>',
                '</div>',
                '</div>'
            ];
            $('body').append(html.join(''));
        }/*,
        setContent: function(str) {
            $('.masker-wp .dialog-body').html(str);
        }*/
    };

    Dialog.init();

    return Dialog;

    /*return {
        init: function() {
            $('[data-action="dialog"]').on('click', this.showDialog);
            $('body').on('click', '.masker-wp .close', this.hideDialog);
            this.initHTML();
        },
        hideDialog: function() {
            $('.masker-wp').hide();
        },
        showDialog: function() {
            $('.masker-wp').show();
        },
        initHTML: function() {
            if ($('.masker-wp').length > 0) {
                return;
            }

            var html = [
                '<div class="masker-wp">',
                    '<div class="masker"></div>',
                    '<div class="dialog">',
                        '<div class="dialog-header"><i class="close">&times;</i></div>',
                    '</div>',
                '</div>'
            ];
            $('body').append(html.join(''));
        }
    };*/

});