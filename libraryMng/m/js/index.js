/**
 * Created by situ on 2016/8/8.
 */

var bookApp = angular.module('bookApp', []);

bookApp.controller('bookController', function($scope, $http, $timeout) {

    /*$scope.param = {
        pageSize: 5
    };*/

    $scope.currPage = 0;
    $scope.bookList = [];
    $scope.totalPage = 0;
    $scope.pageSize = 5;
    $scope.loadMsg = "努力加载中...";
    $scope.showLoadMsg = true;

    window.onscroll = function() {
        var st = document.body.scrollTop,
            sh = document.body.scrollHeight,
            ih = this.innerHeight;

        if (st + ih == sh) { // 滚动到底部

            $scope.currPage++;
            if ($scope.currPage >= $scope.totalPage) {
                $timeout(function() {
                    $scope.loadMsg = "没有更多了...";
                    $timeout(function() {
                        $scope.showLoadMsg = false;
                    }, 2000);
                });
               /* $scope.loadMsg = "没有更多了...";
                console.log('没有更多了');*/
                return;
            }
            $scope.loadData();

        }

        //console.log(document.body.scrollTop + ":" + document.body.scrollHeight + ":" + this.innerHeight)
    };

    ////////////////////////////////////////////////////////

    $scope.suggest = ["WEB前端开发", "开发工程师", "WEB前端开发工程师", "程序员", "编程", "javascript"];

    ////////////////////////////////////////////////////////

    $scope.loadData = function() {

        $http({
            method: 'get',
            url: '../../api/books_list.php',
            params: {size: $scope.pageSize, page: $scope.currPage}
        }).success(function(response) {

            // $scope.name = "test";

            $scope.totalPage = Math.ceil(response.total / $scope.pageSize);

            $scope.bookList = $scope.bookList.concat(response.data);

            console.log($scope.bookList);

        }).error(function(response) {

        });

    };

    $scope.loadData();

});