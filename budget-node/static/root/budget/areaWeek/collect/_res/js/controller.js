var app = angular.module('collectSummary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('collectSummaryCtrl', function($scope,$state,toastr,areaWeekSer){
   //查询所有地区
    $scope.areas = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    areaWeekSer.listSummaryArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        areaWeekSer.collectArea($scope.areas).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }
        })
    }};
    areaWeekSer.collectArea2().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }
    });
});





