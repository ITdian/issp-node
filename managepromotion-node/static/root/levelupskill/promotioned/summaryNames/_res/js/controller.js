var app = angular.module('summaryNames', ['toastr','angularjs-dropdown-multiselect']);
app.controller('summaryNamesCtrl', function($scope, promoedSer,toastr){




    //获取地区
    $scope.names = [];
    $scope.stringSettings2 = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    promoedSer.promoedGetNames().then(function(response){
        if(response.data.code == 0){
            $scope.getNames = response.data.data;
        } else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.getSummary2 ={onSelectionChanged(){
        promoedSer.promoedName($scope.names).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }}


});





