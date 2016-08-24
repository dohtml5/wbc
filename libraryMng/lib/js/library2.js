/**
 * Created by situ on 2016/8/24.
 */

!function() {

    var url = '../api/books_list.php';

    $wbc.ajax({
        url: url,
        dataType: 'json',
        success: function(response) {
            renderTable(response.data);
        }
    });

    function renderTable (data) {

        var trs = [];

        $.each(data, function(i, obj) {

            trs.push(
                '<tr>',
                '<td><input id="', obj.id, '" class="book-checkbox" type="checkbox" /></td>',
                '<td>', obj.name, '</td>',
                '<td>', obj.author, '</td>',
                '<td>', obj.publisher, '</td>',
                '<td>￥', obj.price, '</td>',
                '<td>', obj.p_date, '</td>',
                '<td></td>',
                '<td>', obj.status, '</td>',
                '<td>','</td>',
                '</tr>'
            );

        });

        $('#booksTable tbody').html(trs.join(''));

    }

}();