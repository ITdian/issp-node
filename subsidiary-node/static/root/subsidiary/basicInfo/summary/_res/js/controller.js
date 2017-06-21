var app = angular.module('basicInfoSummary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('basicInfoSummaryCtrl', function($scope, basicInfoSer,toastr){
    $scope.areas = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    basicInfoSer.listSummaryArea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        basicInfoSer.summaryBasicInfo($scope.areas).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }
        })
    }}
});





