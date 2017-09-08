
var app = angular.module('summary', ['toastr']);
app.controller('summaryCtrl', function($scope, reviewSer,toastr){
    $scope.showed=true;
    $scope.show=function(val){
        $scope.date = $scope.date.split('-').splice(0,2).join('-')
    }

    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            date:$scope.date
        };
        reviewSer.summaryReview(vm.sum.date).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});





