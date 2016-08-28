/**
 * Created by situ on 2016/8/26.
 */

var app = angular.module('libraryApp', []);

app.controller('mainController', function($scope, $http, $timeout) {

    $scope.params = {
        ids: []
    };

    var getBookList = function() {

        $timeout(function() {
            layer.load();
        });

        /*setTimeout(function() {
            layer.load();
        }, 0);*/

        $http({
            url: '../api/books_list.php',
            method: 'get',
            params: {}
        }).success(function(response) {
            if (response.success) {
                $scope.bookList = response.data;
            } else {
                $scope.bookList = [];
            }
            layer.closeAll();
        }).error();

    };

    getBookList();

    ////////////////////////////////////////////

    $scope.onCheckboxClick = function($event) {

        var id = this.book.id,
            target = $event.target;

        if (target.checked) {
            $scope.params.ids.push(id);
        } else {
            var index = getIndex($scope.params.ids, id);
            if (index > -1) {
                $scope.params.ids.splice(index, 1);
            }
        }

    };

    function getIndex(arr, item) {

        var i, len;
        len = arr.length;
        for (i=0; i<len; i++) {
            if (arr[i] === item) {
                return i;
            }
        }
        return -1;
    }

    /////////////////////////////////////////////////

    /**
     * 根据小图显示大图
     */
    $scope.showPic = function() {

        var url = this.book.bookPic;

        layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            area: '800px',
            skin: 'layui-layer-nobg', //没有背景色
            shadeClose: true,
            content: '<img src="../fileUploading/server/uploadImgs/'+url+'">'
        });

    };

    /**
     * 新增图书
     */
    $scope.addBook = function() {

        layer.open({
            type: 1,
            shade: false,
            title: '新增图书',
            content: $('.book-form'),
            btn: ['确定', '取消'],
            area: ['400px', '190px'],
            yes: function(index) {

                // 表单验证

                if (!$scope.bookPicUrl) {
                    alert('请上传图书封面');
                    return;
                }

                var data = {
                    name: $scope.book.name,
                    bookPic: $scope.bookPicUrl,
                    author: 'author1',
                    publisher: 'test',
                    price: 22.5,
                    p_date: '2016-09-21',
                    classify: 'classify',
                    status: 1,
                    borrow_status: 0
                };

                var url = '../api/books_add.php';

                $http({
                    url: url,
                    method: 'get',
                    params: data
                }).success(function(response) {
                    getBookList();
                    $scope.bookPicUrl = null;
                    layer.close(index);
                });

                console.log(data)
            }
        });
    };

    /**
     * 上传图书封面
     */
    $scope.savePic = function() {

        var fd = new FormData();
        var file = document.querySelector('input[type=file]').files[0];
        fd.append('pic', file);

        $http({
            method: 'post',
            url: '../fileUploading/server/step1.php',
            data: fd,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).success(function(response) {
            if (response.success) {
                $scope.bookPicUrl = response.fileName;
            }
        });
    }

});

//app.controller('uploadController', function($scope, $http) {
//
//    $scope.save = function() {
//
//        var fd = new FormData();
//        var file = document.querySelector('input[type=file]').files[0];
//        fd.append('pic', file);
//
//        $http({
//            method: 'post',
//            url: '../fileUploading/server/step1.php',
//            data: fd,
//            headers: {'Content-Type':undefined},
//            transformRequest: angular.identity
//        }).success(function(response) {
//            if (response.success) {
//
//            }
//        });
//    }
//
//});