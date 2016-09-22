/**
 * Created by situ on 2016/9/22.
 */
!function(window, document, $, undefined) {

    var $dlg = $('#goodsDlg');

    /**
     * 程序唯一入口
     */
    var init = function() {

        bindEvent();

    };

    var bindEvent = function() {
        $('#newBtn').on('click', onNewBtnClick);
        $('#saveBtn').on('click', onSaveBtnClick);
    };

    var onSaveBtnClick = function() {
        var url = '../../../api/shoping_goods_add.php';
        var data = {
            title: $('#title').val(),
            price: $('#price').val(),
            details: $('#detail').val(),
            amount: $('#amount').val(),
            classify: $('#classify').val(),
            status: $('input[name=status]:checked').val()
        };

        // TODO 表单验证

        if (data.title == '') {
            alert('商品名称不能为空！');
            return false;
        }

        layer.msg('加载中', {icon: 16, time: 0, shade: [0.2, '#000']});
        // console.log(data);
        $.get(url, data, function(response) {
            if (response.success) {
                layer.closeAll('loading');
                $dlg.modal('hide');
                $('#gForm').trigger('reset');
                layer.msg('商品添加成功！', {offset: 0, shift: 0});
            } else {
                alert('商品添加失败！');
            }
        }, 'json');

    };

    var onNewBtnClick = function() {
        $dlg.modal();
    };

    $(document).ready(init);

}(window, document, jQuery);