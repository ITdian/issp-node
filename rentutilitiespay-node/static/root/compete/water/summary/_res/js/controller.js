var app = angular.module('summary', ['toastr']);
app.controller('summaryCtrl', function($scope, waterSer,toastr){
    //获取姓名
    waterSer.waterName().then(function(response){
        if(response.data.code == 0){
            $scope.getNames = response.data.data;

        }else {
            toastr.error(response.data.msg,'温馨提示')
        }
    });
    $scope.collect = function(){
        $scope.vm={
            names:$scope.names
        };
        waterSer.waterSummary($scope.vm).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
                console.log($scope.summaryLists)
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        })
   };
});





