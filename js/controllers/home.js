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
        var spreadsheet = {};

        $scope.menuShowFilename = function() {
            // var spreadsheet = Data.getExcel();

            var showFilename = false;
            if (typeof(spreadsheet.filename) != 'undefined'){
                $scope.excelFilename = spreadsheet.filename;
                $scope.sheetNames    = spreadsheet.sheetNames;
                showFilename = true;
                $scope.prompts.menuOpenFile = txtSideMenu.file + ': ' + spreadsheet.filename;
            }
            return showFilename;
        }

    }

]);