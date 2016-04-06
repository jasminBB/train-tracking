angular.module('app', ['ngMaterial', 'ngRoute'])

	.config(function($routeProvider) {

		$routeProvider

			.otherwise({
				templateUrl: "components/views/initial-home.html",
				redirectTo: "/"
			});

	});