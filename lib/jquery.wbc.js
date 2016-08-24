/**
 * Created by situ on 2016/8/24.
 */
!function(window, document, $, undefined) {

    var $wbc = {

        fill0: function(num) {
            return num < 10 ? '0' + num : num;
        },

        ajax: function(param) {

            // $('.masker-wp').show();
            // layer.msg('加载中', {icon: 16});
            layer.load();

            $.ajax({
                url: param.url,
                type: param.type || 'get',
                data: param.data || {},
                dataType: param.dataType || 'text',
                success: function(response) {
                    param.success(response);
                    layer.closeAll('loading');
                },
                error: function() {
                    console.log('Call : ' + param.url + ' error');
                }
            });

        }

    };

    window.$wbc = $wbc;

}(window, document, jQuery);