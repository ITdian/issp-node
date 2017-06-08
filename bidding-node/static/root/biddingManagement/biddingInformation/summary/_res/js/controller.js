
var app = angular.module('summary', ['toastr','angularjs-dropdown-multiselect']);
app.controller('summaryCtrl', function($scope, infoSer,toastr){
    $scope.cities = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    //获取地区
    infoSer.getCity().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        } else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.getSummary ={onSelectionChanged(){
        infoSer.summaryInfo($scope.cities).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }}
});





