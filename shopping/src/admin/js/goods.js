/**
 * Created by situ on 2016/9/22.
 */
!function(window, document, $, undefined) {

    var $dlg = $('#goodsDlg');
    var cache = {};

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
                // cache = response.data;
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

            cache[obj.id] = obj;

        });

        $('#goodsTable tbody').html(trArr.join(''));

    };

    var bindEvent = function() {
        $('#newBtn').on('click', onNewBtnClick);
        $('#saveBtn').on('click', onSaveBtnClick);
        $('#delBtn').on('click', onDelBtnClick);
        $('#updateBtn').on('click', onUpdateBtnClick);
        $('#goodsTable').on('click', 'tbody input[type=checkbox]', onChkBoxClick);
    };

    var onUpdateBtnClick = function() {
        var $chkbox = $('#goodsTable tbody input[type=checkbox]:checked');
        var id = $chkbox[0].id;
        var obj = cache[id];
        // var obj = getObjById(id, cache);

        $dlg.find('#title').val(obj.title);
        $dlg.find('#gid').val(id);
        // ...
        $dlg.find('#classify').val(obj.classify);
        $dlg.find('input[name=status][value="'+obj.status+'"]').trigger('click');

        $dlg.find('#dlgTitle').text('修改商品').end().modal('show');

    };

    /**
        方法一：写函数遍历得到当前对象
    */
    /*var getObjById = function(id, arr) {
        var len = arr.length;
        if (len == 0) {
            return null;
        }
        for (var i=0; i<len; i++) {
            if (arr[i].id == id) {
                return arr[i];
            }
        }
        return null;
    };*/

    var onChkBoxClick = function() {
        var $chkbox = $('#goodsTable tbody input[type=checkbox]:checked');
        var $delBtn = $('#delBtn');
        var $updateBtn = $('#updateBtn');
        var len = $chkbox.length;

        if (len > 0) {
            $delBtn.removeAttr('disabled');
            $updateBtn.attr('disabled', 'disabled');
            if (len == 1) {
                $updateBtn.removeAttr('disabled');
            }
        } else {
            $delBtn.add($updateBtn).attr('disabled', 'disabled');
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
        var url = '../../../api/shopping_goods_add.php';
        var id = $('#gid').val();
        var data = {
            // id: $('#gid').val(),
            title: $('#title').val(),
            price: $('#price').val(),
            details: $('#detail').val(),
            amount: $('#amount').val(),
            classify: $('#classify').val(),
            status: $('input[name=status]:checked').val()
        };

        if (id != 0) { // 修改
            url = '../../../api/shopping_goods_update.php';
            data.id = $('#gid').val();
        }

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
        $('#gForm').trigger('reset');
        $dlg
        .find('#gid').val(0).end()
        .find('#dlgTitle').text('新增商品').end().modal('show');
    };

    $(document).ready(init);

}(window, document, jQuery);