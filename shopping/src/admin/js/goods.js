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

        getTableData();

    };

    var getTableData = function() {

        var url = "../../../api/shopping_goods_list.php";

        setTimeout(function() {
            layer.msg('加载中', {icon: 16, time: 0, shade: [0.2, '#000']});
        }, 0);

        $.get(url, function(response) {

            // console.log(1)

            if (response.success) {
                renderTable(response);
                layer.closeAll();
            } else {

            }

        }, 'json');

        // console.log(2)

    };

    var renderTable = function(response) {

        var data = response.data,
            trArr = [];

        $.each(data, function(i, obj) {

            trArr.push(
                '<tr>',
                    '<td><input id="', obj.id, '" type="checkbox"></td>',
                    '<td>', i + 1, '</td>',
                    '<td>', obj.title, '</td>',
                    '<td>￥', obj.price, '</td>',
                    '<td>', obj.details, '</td>',
                    '<td>', obj.amount, '</td>',
                    '<td>', obj.classify, '</td>',
                '</tr>'
            );

        });

        $('#goodsTable tbody').html(trArr.join(''));

    };

    var bindEvent = function() {
        $('#newBtn').on('click', onNewBtnClick);
        $('#saveBtn').on('click', onSaveBtnClick);
        $('#delBtn').on('click', onDelBtnClick);
        $('#goodsTable').on('click', 'tbody input[type=checkbox]', onChkBoxClick);
    };

    var onChkBoxClick = function() {
        var $chkbox = $('#goodsTable tbody input[type=checkbox]:checked');
        var $delBtn = $('#delBtn');
        if ($chkbox.length > 0) {
            $delBtn.removeAttr('disabled');
        } else {
            $delBtn.attr('disabled', 'disabled');
        }
    };

    var onDelBtnClick = function() {
        var $chkbox = $('#goodsTable tbody input[type=checkbox]:checked');
        var rArr = [];
        var url = "../../../api/shopping_goods_del.php";

        layer.confirm('确定要删除所选商品吗？', {
            btn: ['取消','确定'],
            closeBtn: 0
        }, function() {
            layer.closeAll();
        }, function() {

            layer.msg('加载中', {icon: 16, time: 0, shade: [0.2, '#000']});

            $chkbox.each(function() {
                rArr.push(this.id);
            });

            $.get(url, {ids: rArr.join(',')}, function(response) {

                if (response.success) {
                    // TODO
                    layer.msg('删除成功！', {offset: 0, shift: 0});
                    getTableData();
                    $('#delBtn').attr('disabled', 'disabled');
                    layer.closeAll();
                } else {

                }

            }, 'json');

        });

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
                layer.closeAll();
                $dlg.modal('hide');
                $('#gForm').trigger('reset');
                layer.msg('商品添加成功！', {offset: 0, shift: 0});
                getTableData();
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