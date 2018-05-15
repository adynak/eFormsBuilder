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
                if (shortcuts.length > 0){
                    $scope.excelFilename = 'catsndogs';
                    $scope.sheetNames    = ["View Shortcuts"];
                    showFilename = true;
                    // $scope.prompts.menuOpenFile = txtSideMenu.file + ': ' + 'raininspain';
                    $location.path("/shortcuts");
                }

            }
            return showFilename;
        }

    }

]);