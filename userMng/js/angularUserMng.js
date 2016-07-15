var app = angular.module('userList', []);
app.controller('userListController', function($scope, $http) {

	$scope.dlgTitle = '';
	$scope.dlgMessage = '';
	$scope.userData = {};
	$scope.tmpUser;

	$scope.updateUser = function() {
		$scope.dlgTitle = '修改用户';
		$scope.userData = this.user;
		$scope.userData.hobby = $.parseJSON(this.user.hobbies);

		// $scope.userData.hobby = _.object(['hb1', 'hb2', 'hb3'], this.user.hobbies.split("|"));
		
		$('#userDlg').modal('show');
		// console.log($scope.userData)
	};

	$scope.doDelUser = function() {
		$http({
			method: "get",
			url: "server/ajaxDelUser.php",
			params: {id: $scope.tmpUser.id}
		}).success(function(response) {
			if (response.success) {
				initTable();
				$('#smallDlg').modal('hide');
			}
		});
	};

	$scope.delUser = function() {
		$scope.tmpUser = this.user;

		$scope.dlgTitle = '系统提示';
		$scope.dlgMessage = '确定要删除该用户吗？';
		$('#smallDlg').modal('show');
	};

	$scope.addNewUser = function() {
		$scope.dlgTitle = '新增用户';
		$('#userDlg').modal('show');
		$scope.userData = {};
		// $scope.userData.edu = '请选择';
		$scope.userData.edu = '大专';
	};

	$scope.saveUser = function() {
		var hobbies = $scope.userData.hobby;
		$scope.userData.hobbies = JSON.stringify(hobbies);
		// $scope.userData.hobbies = _.filter(_.values(hobbies), function(val) {return val != '';}).join('|');

		/*$http.get("server/ajaxReg.php").success(function(response) {
		});*/

		$http({
			method: "get",
			url: "server/ajaxReg.php",
			params: $scope.userData
		}).success(function(response) {
			if (response.success) {
				initTable();
				$('#userDlg').modal('hide');
			}
		});
	};

	//////////////////////////////////////////////////////////////

    function initTable() {
    	$http.get("server/ajaxUserList.php").success(function(response) {
	    	if (response.success) {
	    		$scope.users = response.data;
	    	}
	    	// console.log(response)
	    });
    }

    initTable();
});