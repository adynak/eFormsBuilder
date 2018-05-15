eFormsBuilder.controller('ShortcutDetailController', 
		[
            '$scope', 
            '$uibModal', 
            '$uibModalInstance', 
            '$filter', 
            '$interval', 
            'selectedRow',
    function ($scope, $uibModal, $uibModalInstance, $filter, $interval, selectedRow) {

    	txtShortcutDetail.shortcutName = selectedRow.name;
        txtShortcutDetail.something = 'CatsNDogs';
    	$scope.prompts = txtShortcutDetail;

        // console.log('grid selected row',selectedRow);

        gridData = selectedRow.text;

        $scope.gridOptions = {
            enableGridMenu: false,
            enableFiltering: false,
            enableSorting : false,
            enableRowSelection: true,
            enableRowHeaderSelection: false, 
            multiSelect: true,
            data: gridData,
// rowHeight:42,            
            columnDefs: [
                {
                    name: "name",
                    // showHeader: false,
                    displayName: txtShortcutDetail.shortCuts,
                    enableColumnMenu: false,
                    // headerCellTemplate: 'views/headerTemplate.html',
                    // filters: [
                    //     {
                    //         condition: uiGridConstants.filter.CONTAINS,
                    //         placeholder: ' contains'
                    //     }
                    // ],
                    // cellTemplate: '<div ng-click="grid.appScope.showShortcutDetail(row)" class="ui-grid-cell-contents">{{row.entity.name}}</div>'
                    cellTemplate: 'views/cellTemplate.html'
                },
                {
                    name:"conditional",
                    displayName: txtShortcutDetail.conditions,
                    cellTemplate: 'views/conditionalTemplate.html'

                }
            ],
            onRegisterApi: function(gridApi){ 
                $scope.gridApi = gridApi;
            }

        };

        $scope.blah = function(){
            console.log('doubleclick');
        }


        $scope.copyAll = function () {
            console.log($scope.gridApi.selection.getSelectedRows());
            $uibModalInstance.close();
        };

    	
        $scope.copySelected = function () {
            var selectedRows = $scope.gridApi.selection.getSelectedRows();
            // console.log($scope.gridApi.selection.getSelectedRows());
            console.log(selectedRows.length);
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.close();
        };
    }
]);