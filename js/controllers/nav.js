eFormsBuilder.controller('NavigationController', 
	[
		'$scope', 
		'$http', 
		'$location', 
		'Data', 
		'$rootScope', 
		'$routeParams', 

    function($scope, $http, $location, Data, $rootScope, $routeParams) {

		$scope.prompts = txtNavigation;
		console.log($scope.prompts);

    }
]);