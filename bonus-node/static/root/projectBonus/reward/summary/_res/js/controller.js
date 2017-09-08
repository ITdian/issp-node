var app = angular.module('summary', ['toastr']);
app.controller('summaryCtrl', function($scope, rewardSer,toastr){

    $scope.showed=true;
    // 获取地区
    rewardSer.rentArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
            console.log($scope.areas)
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 获取项目名称
    rewardSer.moneyGroup().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
            console.log($scope.projects)
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    $scope.all = function(){
        var vm = $scope;
         var start =  angular.element('.start').val();
         var end =  angular.element('.end').val();
        vm.sum={
            area:vm.area,
            project:vm.project
        };
        vm.sum.start=start;
        vm.sum.end=end;
        rewardSer.rewardAllReward(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.rewardLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
    $scope.one = function(){
        var vm = $scope;
         var start =  angular.element('.start').val();
         var end =  angular.element('.end').val();
        vm.sum={
            area:vm.sum.area,
            project:vm.sum.project
        };
        vm.sum.start=start;
        vm.sum.end=end;
        rewardSer.rewardOneReward(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.rewardLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
});





