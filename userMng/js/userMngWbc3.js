var app = angular.module('userMng', []);

app.filter('fmtHobbies', function() {
	return function(hobbies) {
		var h;
		try {
			h = _.filter(_.values($.parseJSON(hobbies)), function(val) {return val != ''}).join('|');
		} catch(e) {
			h = hobbies;
		}
		return h;
	};
});

app.controller('userMngController', function($scope, $http) {

	$scope.pageSize = 5;
	$scope.page = 0;

	$scope.lastPage = function() {
		$scope.page = getTotalPage() - 1;
		renderTable();
	};

	$scope.firstPage = function() {
		$scope.page = 0;
		renderTable();
	};

	$scope.clickPagingLi = function() {
		// console.log(this)
		$scope.page = this.tmpPage;
		renderTable();
	};

	$scope.searchUser = function() {
		renderTable();
	};

	$scope.doUpdateUser = function() {

		// TODO check

		$http({
			url: 'server/ajaxUpdateUser.php',
			method: 'get',
			params: this.user
		}).success(function(response) {
			if (response.success) {
				renderTable();
				$('#userDialog').modal('hide');
			}
		});
		// console.log($scope.user)
		// console.log(this.user)
	};

	$scope.updateUser = function() {
		$scope.userDlgTitle = '修改用户';
		$scope.isUpdate = true;
		this.user.hobbies = JSON.parse(this.user.hobbies);
		// this.user.hobbies = {"hb1":"篮球", "hb3":"音乐"};
		$scope.user = this.user;
		$('#userDialog').modal('show');
	};

	$scope.delUser = function() {
		var id = this.user.id;
		if(confirm('确定要删除该用户吗？')) {
			$http({
				url: 'server/ajaxDelUser.php',
				method: 'get',
				params: {id: id}
			}).success(function(response) {
				if (response.success) {
					renderTable();
				}
			});
		}
	};

	$scope.saveUser = function() {

		// $scope.user.hobbies = '篮球|爬山';
		$scope.user.hobbies = JSON.stringify($scope.user.hobbies);
		$scope.user.img = 'abc.png';

		// TODO check

		$http({
			url: 'server/ajaxReg.php',
			method: 'get',
			params: $scope.user
		}).success(function(response) {
			if (response.success) {
				renderTable();
				$('#userDialog').modal('hide');
				$scope.user = {};
			}
		});

	};

	$scope.newUser = function() {
		$scope.userDlgTitle = '新增用户';
		$scope.isUpdate = false;
		$('#userDialog').modal('show');
	};


	function renderTable() {

		// $http.get();

		$http({
			url: 'server/ajaxUserList.php',
			method: 'get',
			params: {size: $scope.pageSize, query: $scope.query, page: $scope.page}
		}).success(function(response) {
			if (response.success) {
				$scope.users = response.data;
				$scope.total = response.total; // 37
				$scope.pageArr = _.range(0, getTotalPage());

				// renderPaging();
			}
		});
	}

	/*function renderPaging() {
		$scope.pageArr = _.range(0, getTotalPage());
	}*/

	function getTotalPage() {
		return parseInt($scope.total / $scope.pageSize) + 1;
	}

	renderTable();

});