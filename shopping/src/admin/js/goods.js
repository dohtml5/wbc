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
    var clsCache;
    var fd = new FormData();

    /**
     * 程序唯一入口
     */
    var init = function() {

        bindEvent();

        getTableData();

    };

    var getTableData = function() {

        var url = "../../../api/shopping_goods_list.php",
            url2 = "../../../api/shopping_classify_list.php";

        setTimeout(function() {
            layer.msg('加载中', {icon: 16, time: 0, shade: [0.2, '#000']});
        }, 0);

        $.when($.getJSON(url, param), $.getJSON(url2)).done(function(resList, resClassify) {

            if (resList[0].success && resClassify[0].success) {
                layer.closeAll();
            } else {
                layer.msg('暂无查询结果', {offset: 0, shift: 0});
            }

            clsCache = resClassify[0];
            renderTable(resList[0]);
            renderPaging(resList[0]);

        });

        /*
        $.get(url, param, function(response) {

            if (response.success) {
                // cache = response.data;
                layer.closeAll();
            } else {
                layer.msg('暂无查询结果', {offset: 0, shift: 0});
            }

            renderTable(response);
            renderPaging(response);

        }, 'json');*/

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

    var renderTable = function(resList) {

        var data = resList.data,
            trArr = [];

        $.each(data, function(i, obj) {

            var title = obj.title;

            title = title.length > 20 ? title.substr(0, 20) + '...' : title;

            if (param.query != '') {
                title = title.replace(param.query, '<span class="red">' + param.query + '</span>');
            }

            trArr.push(
                '<tr>',
                    '<td><input id="', obj.id, '" type="checkbox"></td>',
                    '<td>', i + 1, '</td>',
                    '<td title="', obj.title, '">', title, '</td>',
                    '<td>￥', obj.price, '</td>',
                    '<td title="', obj.details, '"><span class="txt-ellipsis w-420">', obj.details, '</span></td>',
                    '<td>', obj.amount, '</td>',
                    '<td>', getNameById(obj.classify, clsCache.data), '</td>',
                '</tr>'
            );

            cache[obj.id] = obj;

        });

        $('#goodsTable tbody').html(trArr.join(''));

    };

    var getNameById = function(id, arr) {
        var name;
        $.each(arr, function(i, obj) {
            if (obj.id == id) {
                name = obj.name;
                return false;
            }
        });

        return name;
    };

    var bindEvent = function() {
        $('#newBtn').on('click', onNewBtnClick);
        $('#saveBtn').on('click', onSaveBtnClick);
        $('#delBtn').on('click', onDelBtnClick);
        $('#updateBtn').on('click', onUpdateBtnClick);
        $('#searchBtn').on('click', onSearchBtnClick);
        $('#goodsTable').on('click', 'tbody input[type=checkbox]', onChkBoxClick);
        $('#pagingUl').on('click', 'li', onPagingLiClick);
        $('#pic').on('change', onUploadPicChange);
    };

    var onUploadPicChange = function() {

        fd.append('pic', this.files[0]);

        var xhr = new XMLHttpRequest();
        xhr.open('post', '../../../api/shopping_file_upload.php');
        xhr.send(fd);

        xhr.onload = function() {
            var response;
            if (this.status == 200 && this.readyState == 4) {
                response = JSON.parse(this.responseText);
                $('#tmpPicName').val(response.fileName);
            }
        };
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
        param.page = 0;

        getTableData();
    };

    var onUpdateBtnClick = function() {
        var $chkbox = $('#goodsTable tbody input[type=checkbox]:checked');
        var id = $chkbox[0].id;
        var obj = cache[id];
        // var obj = getObjById(id, cache);

        renderClassify();

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
            status: $('input[name=status]:checked').val(),
            pic: $('#tmpPicName').val()
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

        renderClassify();

        $('#gForm').trigger('reset');
        $('#tmpPicName').val('');

            $dlg
            .find('#gid').val(0).end()
            .find('#dlgTitle').text('新增商品').end().modal('show');

        /*getClassifyData(function() {
            $('#gForm').trigger('reset');
            $dlg
            .find('#gid').val(0).end()
            .find('#dlgTitle').text('新增商品').end().modal('show');
        });*/
    };

    var renderClassify = function() {
        var optArr = ['<option value="0">请选择</option>'];
         $.each(clsCache.data, function(i, obj) {
            optArr.push('<option value="', obj.id, '">', obj.name, '</option>');
        });
        $dlg.find('#classify').html(optArr.join(''));
    };

    /*var getClassifyData = function(callback) {
        var url = "../../../api/shopping_classify_list.php";
        layer.msg('加载中', {icon: 16, time: 0, shade: [0.2, '#000']});
        $.get(url, function(response) {
            var optArr = ['<option value="0">请选择</option>'];
            if (response.success) {
                $.each(response.data, function(i, obj) {
                    optArr.push('<option value="', obj.id, '">', obj.name, '</option>');
                });
                $dlg.find('#classify').html(optArr.join(''));
                // console.log(88)
                callback();
                layer.closeAll();
            } else {
                // TODO
            }
        }, 'json');
    };*/

    $(document).ready(init);

}(window, document, jQuery);