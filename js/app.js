var eFormsBuilder = angular.module('eFormsBuilder', 
        [
            'ngRoute', 
            'ngAnimate', 
            'ngTouch', 
            'ui.grid', 
            'ui.grid.edit', 
            'ngMessages', 
            'ui.grid.grouping', 
            'ui.bootstrap',
            'ui.grid.selection',
            'ui.grid.cellNav'
        ]);

eFormsBuilder.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    
    $locationProvider.hashPrefix(''); 

    document.title = txtNavigation.brandName;

    $routeProvider.
    when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    }).
    // when('/viewSheet/:id', {
    //     templateUrl: 'views/viewSheet.html',
    //     controller: 'ViewSheetController',
    // }).
    otherwise({
        redirectTo: '/home'
    });


}]).run(function($rootScope, $location) {
    $rootScope.$on("$routeChangeStart", function(event, next, current) {
        // thre is nothing special that we need to do here for this application
    });
});

