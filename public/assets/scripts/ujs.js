angular.module('app', []);
angular.module('app')

	.controller('mainController', ['$scope', function($scope) {

		$scope.message = "Hello World";

	}]);