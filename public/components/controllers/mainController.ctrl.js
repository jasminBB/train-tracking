angular.module('app')

	.controller('mainController', ['$scope', function($scope) {

		$scope.stateObject = {
			initialLoading: true
		};

	}]);