/**
 * Created by situ on 2016/8/26.
 */

var app = angular.module('libraryApp', []);

app.controller('mainController', function($scope, $http) {

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
            // layer.closeAll();
        }).error();

    };

    getBookList();

});