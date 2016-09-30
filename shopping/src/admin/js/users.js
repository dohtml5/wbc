var usersApp = angular.module('usersApp', []);

usersApp.controller('usersController', function($scope, $http) {

	$scope.paging = {
		size: 5,
		page: 0,
		baseNum: 0,
		status: 1
	};

	$scope.params = {
		ids: []
	};

	$scope.showDisUsers = function() {
		$scope.paging.status = 0;
		renderList();
	};

	$scope.showUsers = function() {
		$scope.paging.status = 1;
		renderList();
	};

	////////////////////////////////////////
	$scope.onResuBtnClick = function() {
		Util.http($http, {
			url: '../../../api/shopping_user_status.php',
	        params: {ids: $scope.params.ids.join(','), status: 1},
	        success: function(response) {
	        	if (response.success) {
	        		renderList();
	        	}
	        }
		});
	};
	////////////////////////////////////////

	$scope.onDelBtnClick = function() {
		Util.http($http, {
			url: '../../../api/shopping_user_status.php',
	        params: {ids: $scope.params.ids.join(','), status: 0},
	        success: function(response) {
	        	if (response.success) {
	        		renderList();
	        	}
	        }
		});

		/*$http({
	        url: '../../../api/shopping_user_disable.php',
	        method: 'get',
	        params: {ids: $scope.params.ids.join(',')}
	    }).success(function(response) {
	        if (response.success) {
	        	renderList();
	        } else {
	        	// TODO
	        }
	    });*/
	};

	////////////////////////////////////////

	$scope.onPagingLiClick = function() {
		$scope.paging.page = this.page;
		renderList();
	};

	// TODO 上一页，下一页，首页，末页

	////////////////////////////////////////

	$scope.onChkboxClick = function($event) {
		var status = $event.target.checked,
			id = this.user.id,
			index;

		if (status) {
			$scope.params.ids.push(id);
		} else {
			index = $scope.params.ids.indexOf(id);
			$scope.params.ids.splice(index, 1);
		}

	};

	////////////////////////////////////////

	function renderList() {

		$scope.params.ids.length = 0;

		/*if ($scope.userList) {
			console.log($scope.params.ids.length);
			console.log($scope.userList.length);
		}*/

		Util.http($http, {
			url: '../../../api/shopping_user_list.php',
			params: {size: $scope.paging.size, page: $scope.paging.page, status: $scope.paging.status},
			success: function(response) {
		        if (response.success) {
		        	$scope.userList = response.data;
		        	$scope.pageArr = getPageArr(response.total);
		        	$scope.paging.baseNum = $scope.paging.page * $scope.paging.size;
		        } else {
		        	if ($scope.paging.page > 0) {
		        		$scope.paging.page--;
		        		renderList();
		        	} else {
		        		$scope.userList = [];
		        		alert('列表为空！');
		        	}
		        	
		        }
		    }
		});
		/*$http({
	        url: '../../../api/shopping_user_list.php',
	        method: 'get',
	        params: {size: $scope.paging.size, page: $scope.paging.page}
	    }).success(function(response) {
	        if (response.success) {
	        	$scope.userList = response.data;
	        	$scope.pageArr = getPageArr(response.total);
	        	$scope.paging.baseNum = $scope.paging.page * $scope.paging.size;
	        } else {
	        	// TODO
	        }
	    });*/
	};

	renderList();

	////////////////////////////////////////

    function getPageArr(total) {
    	var len = Math.ceil(total / $scope.paging.size);
    	var arr = [];
    	for (var i=0; i<len; i++) {
    		arr.push(i);
    	}
    	return arr;
    }

});