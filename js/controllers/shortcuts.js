eFormsBuilder.controller('ShortcutsController', 
    [
        '$scope', 
        '$uibModal', 
        'Data', 
        '$window', 
        '$routeParams',
        '$filter',
        'uiGridConstants',
        '$location',

    function($scope, $uibModal, Data, $window, $routeParams, $filter, uiGridConstants, $location) {
        var gridData;

        $scope.modalShown = false;
        $scope.prompts = txtCommon;

        gridData = Data.getTextContents();

        $scope.sheetName = 'eFormsBuilder Shortcuts';

        $scope.clearSearch = function(){
            $scope.searchText = '';
            $scope.gridOptions.data = Data.getTextContents();
            // $scope.gridApi.core.refresh();

        }

        $scope.removeFilter = function(param){
            console.log(param);
            $scope.filterText = '';
            $scope.gridOptions.data = $filter('filter')(gridData , $scope.searchText, undefined);
            // $scope.gridOptions.data = Data.getTextContents();
            // $scope.gridApi.core.refresh();

        }

        $scope.btnDone = function(){
            // window.history.go(-1);
            Data.setTextContents("");
            $location.path("/home");            
        };

        $scope.searchGrid = function() {
            $scope.gridOptions.data = $filter('filter')(gridData , $scope.searchText, undefined);
        };

        $scope.filterGrid = function(searchPattern) {
                        $scope.gridOptions.data = $filter('filter')(gridData , $scope.searchText, undefined);

            $scope.gridOptions.data = $filter('filter')($scope.gridOptions.data , searchPattern, undefined);
        };

        $scope.showShortcutDetail = function(row){
            $uibModal.open({
                templateUrl: 'views/shortcutDetail.html',
                // backdrop: true,
                windowClass: 'app-modal-window',                   
                controller: 'ShortcutDetailController',
                resolve: {
                    selectedRow: function () {                    
                        return row.entity;
                    }
                }
            });

        };


        $scope.gridOptions = {
            enableGridMenu: false,
            enableFiltering: true,
            enableSorting : false,
            enableRowSelection: true,
            enableRowHeaderSelection: false, 
            multiSelect: false,
            data: gridData,
            rowHeight: 19,
            columnDefs: [
                {
                    name: "name",
                    showHeader: false,
                    displayName: "",
                    enableColumnMenu: false,
                    headerCellTemplate: 'views/headerTemplate.html',
                    filters: [
                        {
                            condition: uiGridConstants.filter.CONTAINS,
                            placeholder: ' contains'
                        }
                    ],
                    cellTemplate: '<div ng-click="grid.appScope.showShortcutDetail(row)" class="ui-grid-cell-contents">{{row.entity.name}}</div>'

                }
            ],
            onRegisterApi: function(gridApi){ 
                $scope.gridApi = gridApi;
            }

        };

    }
]);
