eFormsBuilder.controller('HomeController', 
    [
        '$scope', 
        '$http', 
        '$location', 
        'Data', 
        '$rootScope', 
        '$routeParams', 

    function($scope, $http, $location, Data, $rootScope, $routeParams) {

        $scope.prompts = txtSideMenu;
        var shortcuts ;

        $scope.menuShowFilename = function() {
            shortcuts = Data.getTextContents();

            var showFilename = false;
            if (typeof(shortcuts) != 'undefined'){
                $scope.excelFilename = 'catsndogs';
                $scope.sheetNames    = ["View Shortcuts"];
                showFilename = true;
                $scope.prompts.menuOpenFile = txtSideMenu.file + ': ' + 'raininspain';
            }
            return showFilename;
        }

    }

]);