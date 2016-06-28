var app = angular.module('mng', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'views/index.html', controller: 'indexController'})
		.when('/users', {templateUrl: 'views/users.html', controller: 'usersController'})
		.when('/asset', {templateUrl: 'views/asset.html', controller: 'assetController'})
		.otherwise({redirectTo: '/'});
}]);

app.controller('mngController', function($scope) {
	$scope.pData = {
		indexActive: true,
		usersActive: false,
		assetActive: false
	};

	$scope.maps = {
		'/': 'indexActive',
		'/users': 'usersActive',
		'/asset': 'assetActive'
	};

	$scope.setNavStatus = function(curr) {
		for (var key in $scope.pData) {
			$scope.pData[key] = false;
		}
		$scope.pData[$scope.maps[curr]] = true;
	};
});

app.controller('indexController', function($scope, $location) {
	$scope.setNavStatus($location.path());
});

app.controller('usersController', function($http, $scope, $location) {
	$scope.setNavStatus($location.path());

	$http.get("server/ajaxUserList.php?size=5").success(function(response) {
    	if (response.success) {
    		$scope.users = response.data;
    	}
    });
});

app.controller('assetController', function($http, $scope, $location) {
	$scope.setNavStatus($location.path());

	$http.get("../api/gome_list.php").success(function(response) {
    	if (response.success) {
    		$scope.lists = response.data;
    	}
    });
});
