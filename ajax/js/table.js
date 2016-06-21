!function(window, document, $, undefined) {

    var $maskerWpId = $('#maskerWpId'),
        cache = {},
        PAGESIZE = 3;

    var bindEvent = function() {
        $('.del-btn').off('click').on('click', onDelBtnClick);
        $('#newUserBtn').off('click').on('click', onNewUserBtnClick);
        $('#cancelBtn').off('click').on('click', function() {
            $maskerWpId.hide();
        });
        $('#submitBtn').off('click').on('click', onSubmitBtnClick);
        $('.update-btn').off('click').on('click', onUpdateBtnClick);

        $('#searchBtn').off('click').on('click', onSearchBtnClick);
    };

    var onSearchBtnClick = function() {
        var $searchTxt = $('#searchTxt'),
            val = $.trim($searchTxt.val());

        /*if (val.length == 0) {
            alert('请输入要搜索的内容');
            return;
        }*/

        renderTable(val);

    };

    var onUpdateBtnClick = function() {
        var $this = $(this),
            uid = $this.attr('uid'),
            obj = cache[uid];

        $maskerWpId
            .find('[name=username]').val(obj.username)
            .end()
            .find('[name=password]').val(obj.password)
            .end()
            .find('[name=name]').val(obj.name)
            .end()
            .find('[id=submitBtn]').text('修改').attr('class', 'submit-update-btn')
            .end()
            .find('[name=id]').val(uid)
            .end()
            .show();
    };

    var onSubmitBtnClick = function() {
        var $this = $(this),
            url,
            param;

        if ($this.hasClass('submit-update-btn')) { // 修改
            url = 'http://dohtml5.duapp.com/php/wbc2/updateUser.php?callback=?';
            param = $('#maskerWpId form').serialize();
        } else { // 新增
            url = 'http://dohtml5.duapp.com/php/wbc2/reg.php?callback=?';
            param = $('#maskerWpId form').serialize();
        }    

        // TODO 输入验证

        $.get(url, param, function(response) {
            if (response.success) {
                renderTable();
                $maskerWpId.hide();
            } else {
                alert('操作失败，请重试!');
            }
        }, 'json');

        // console.log(param);
    };

    var onNewUserBtnClick = function() {
        $('#maskerWpId input').val('');
        $maskerWpId
            .find('[id=submitBtn]').text('新增').attr('class', 'new-btn')
            .end()
            .show();
    };

    var onDelBtnClick = function() {
        var $this = $(this),
            uid = $this.attr('uid'),
            uname = $this.attr('uname'),
            url = 'http://dohtml5.duapp.com/php/wbc2/delUser.php?callback=?',
            result;

        result = confirm('确定要删除"' + uname + '"吗？');

        if (result) {
            $.get(url, {id: uid}, function(response) {
                if (response.success) {
                    alert('删除成功');
                    // $this.parents('tr').remove();
                    // window.location.reload();
                    renderTable();
                } else {
                    alert('删除失败');
                }
            }, 'json');
        }

    };

    var paging = function(total, currPage) {
        var totalPage = Math.ceil(total / PAGESIZE),
            lis = [],
            max = 8,
            start = 2,
            counter = 0;

        currPage = currPage || 0;

        if (currPage > 0) {
            lis.push('<li class="page-btn prev">上一页</li>');
        }

        lis.push('<li page="0">1</li>');

        if (currPage > 5) {
            start = currPage - 3;
            lis.push('<li class="more">...</li>');
        }

        if (start + max >= totalPage) {
            start = totalPage - max;
        }

        for (var i=start; i<totalPage; i++) {

            lis.push('<li page="', (i - 1), '">', i, '</li>');

            counter++;

            if (counter > max) {
                break;
            }
            
        }

        if (totalPage - currPage > 6) {
            lis.push('<li class="more">...</li>');
        }

        lis.push('<li page="', (totalPage - 1), '">', totalPage, '</li>');

        if (currPage < totalPage - 1) {
            lis.push('<li class="page-btn next">下一页</li>');
        }

        lis.push('<li class="page-jump"><input type="text" value="'+(currPage * 1 + 1)+'"><button>GO</button></li>');

        $('#pagingUl')
            .html(lis.join(''))
            .find('li')
            .off('click')
            .on('click', onPagingLiClick).
            end()
            .find('li[page='+currPage+']').addClass('active')
            .end()
            .find('.page-jump > button')
            .off('click')
            .on('click', onPageJumpBtnClick);
    };

    var onPageJumpBtnClick = function() {
        var $this = $(this),
            page = $this.parent().find('input').val(),
            $p = $this.parents('#pagingUl'),
            max = $p.find('li[page]:last').attr('page') * 1;

            if (page > max) {
                page = max + 1;
            }

            if (page <= 0) {
                page = 1;
            }

        renderTable('', page - 1);
    };

    /*var paging2 = function(total, currPage) {
        var totalPage = Math.ceil(total / PAGESIZE),
            lis = [];

        currPage = currPage || 0;

        for (var i=0; i<totalPage; i++) {
            if (i == currPage) {
                lis.push('<li page="', i, '" class="active">', (i + 1), '</li>');
            } else {
                lis.push('<li page="', i, '">', (i + 1), '</li>');
            }
            
        }

        $('#pagingUl')
            .html(lis.join(''))
            .find('li')
            .off('click')
            .on('click', onPagingLiClick);
    };*/

    var onPagingLiClick = function() {
        var $this = $(this),
            page = $this.attr('page'),
            $p;

        if ($this.hasClass('more') || $this.hasClass('page-jump')) {
            return;
        }

        if (!page) {
            $p = $this.parents('#pagingUl');
            page = $p.find('li.active').attr('page') * 1;
            if ($this.hasClass('next')) {
                page = ++page;
            } else {
                page = --page;
            }
        }

        renderTable('', page);
    };

    var renderTable = function(q, p) {
        var url = 'http://dohtml5.duapp.com/php/wbc2/userList.php?callback=?',
            param = {size: PAGESIZE};

        if (q) {
            $.extend(param, {query: q});
        }

        if (p) {
            $.extend(param, {page: p});
        }

        $.get(url, param, function(response) {
            var data = response.data,
                trs = [],
                total = response.total;

            paging(total, p);

            $.each(data, function(i, obj) {
                trs.push(
                    '<tr>',
                        '<td>', obj.id, '</td>',
                        '<td>', obj.username, '</td>',
                        '<td>', obj.password, '</td>',
                        '<td>', obj.name, '</td>',
                        '<td></td>',
                        '<td></td>',
                        '<td></td>',
                        '<td></td>',
                        '<td>',
                            '<button uname="', obj.name, '" uid="', obj.id, '" class="del-btn">删除</button>&nbsp;',
                            '<button uid="', obj.id, '" class="update-btn">修改</button>',
                        '</td>',
                    '</tr>'
                );
                // console.log(obj)
                
                cache[obj.id] = obj;
            });

            // console.log(cache);

            $('#userList').html(trs.join(''));
            bindEvent();
        }, 'json');

    };

    renderTable();

}(window, document, jQuery);