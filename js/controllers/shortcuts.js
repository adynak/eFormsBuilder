eFormsBuilder.controller('ShortcutsController', 
    [
        '$scope', 
        '$uibModal', 
        'Data', 
        '$window', 
        '$routeParams',
        '$filter',

    function($scope, $uibModal, Data, $window, $routeParams, $filter) {

        $scope.prompts = txtCommon;

        var gridData;
        gridData = [
            {
                name:"wefef"
            },
            {
                name:"1234213"
            }
        ];

        gridData = Data.getTextContents();

        $scope.sheetName = 'eFormsBuilder Shortcuts';

        $scope.btnDone = function(){
            window.history.go(-1);
        };

        $scope.searchGrid = function() {
            $scope.gridOptions.data = $filter('filter')(gridData , $scope.searchText, undefined);
        };

        $scope.gridOptions = {
            enableGridMenu: false,
            enableSorting : false,
            enableRowSelection: true,
            enableRowHeaderSelection: false, 
            multiSelect: false,
            data: gridData,
            rowHeight: 19,
            columnDefs: [
                {
                    name: "name",
                    displayName: "Available Shortcuts",
                    enableColumnMenu: false
                }
            ]
        };

    }
]);
