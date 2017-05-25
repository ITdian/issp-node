var app = angular.module('detailProSummaryCtrl', ['toastr','angularjs-dropdown-multiselect']);
app.controller('detailProSummaryCtrl', function($scope, detailSer){
    $scope.contractors = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取公司
    detailSer.listSummaryGeneral().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        detailSer.summaryGeneralDetail($scope.contractors).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }
        });
    }};
});





