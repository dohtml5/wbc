/**
 * Created by situ on 2016/9/22.
 */
!function(window, document, $, undefined) {

    var $dlg = $('#goodsDlg');
    var cache = {};
    var param = {
        query: '',
        size: 3,
        page: 0
    };
    var totalPage;

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

        $.get(url, param, function(response) {

            // console.log(1)

            if (response.success) {
                // cache = response.data;
                layer.closeAll();
            } else {
                layer.msg('暂无查询结果', {offset: 0, shift: 0});
            }

            renderTable(response);
            renderPaging(response);

        }, 'json');

        // console.log(2)

    };

    var renderPaging = function(response) {

        var total = response.total;
        totalPage = Math.ceil(total / param.size);
        var liArr = ['<li class="prev"><a href="javascript:;">&laquo;</a></li>'];

        for (var i=0; i<totalPage; i++) {
            if (param.page == i) {
                liArr.push('<li data-page="', i, '" class="active"><a href="javascript:;">', i + 1, '</a></li>');
            } else {
                liArr.push('<li data-page="', i, '"><a href="javascript:;">', i + 1, '</a></li>');
            }
        }

        liArr.push('<li class="next"><a href="javascript:;">&raquo;</a></li>');

        $('#pagingUl').html(liArr.join(''));
        // $('#pagingUl').html(liArr.join('')).find('li').eq(param.page + 1).addClass('active');

    };

    var renderTable = function(response) {

        var data = response.data,
            trArr = [];

        $.each(data, function(i, obj) {

            var title = obj.title;

            if (param.query != '') {
                title = title.replace(param.query, '<span class="red">' + param.query + '</span>');
            }

            trArr.push(
                '<tr>',
                    '<td><input id="', obj.id, '" type="checkbox"></td>',
                    '<td>', i + 1, '</td>',
                    '<td>', title, '</td>',
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
        $('#searchBtn').on('click', onSearchBtnClick);
        $('#goodsTable').on('click', 'tbody input[type=checkbox]', onChkBoxClick);
        $('#pagingUl').on('click', 'li', onPagingLiClick);
    };

    var onPagingLiClick = function() {
        var $this = $(this),
            page = $this.attr('data-page');

        if ($this.hasClass('next')) { // 下一页
            page = ++param.page;
            page = page > (totalPage - 1) ? totalPage - 1 : page;
        } else if ($this.hasClass('prev')) {
            page = --param.page;
            page = page < 0 ? 0 : page;
        }

        param.page = page;
        getTableData();
    };

    var onSearchBtnClick = function() {
        var $searchIpt = $('#searchIpt'),
            txt = $searchIpt.val();

        param.query = txt;

        getTableData();
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
                layer.msg('商品添加失败！', {offset: 0, shift: 0});
            }
        }, 'json');

    };

    var onNewBtnClick = function() {
        getClassifyData();
        $('#gForm').trigger('reset');
        $dlg
        .find('#gid').val(0).end()
        .find('#dlgTitle').text('新增商品').end().modal('show');
    };

    var getClassifyData = function() {
        var url = "../../../api/shopping_classify_list.php";
        $.get(url, function(response) {
            var optArr = ['<option value="0">请选择</option>'];
            if (response.success) {
                $.each(response.data, function(i, obj) {
                    optArr.push('<option value="', obj.id, '">', obj.name, '</option>');
                });
                $dlg.find('#classify').html(optArr.join(''));
            } else {
                // TODO
            }
        }, 'json');
    };

    $(document).ready(init);

}(window, document, jQuery);