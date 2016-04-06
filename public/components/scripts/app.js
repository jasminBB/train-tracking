angular.module('app', ['ngMaterial', 'ngRoute'])

	.config(function($routeProvider) {

		$routeProvider

			.when('/main', {
				templateUrl: "components/views/main.html",
				controller: "mainMenuController",
				controllerAs: "mainMenuCtrl",
			})

			.otherwise({
				templateUrl: "components/views/initial-home.html",
				controller: "splashController",
				controllerAs: "splashCtrl",
				redirectTo: "/"
			});

	});