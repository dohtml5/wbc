/**
 * Created by situ on 2016/8/26.
 */

var app = angular.module('libraryApp', []);

app.controller('mainController', function($scope, $http) {

    $scope.params = {
        ids: []
    };

    var getBookList = function() {

        layer.load();

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

        console.log($scope.params.ids);

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

});