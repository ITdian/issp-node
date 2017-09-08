var app = angular.module('summaryReward', ['toastr']);
app.controller('summaryRewardCtrl', function($scope, punishSer,toastr){
    $scope.showed=true;
    // 获取地区
    punishSer.rentArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 获取绩效指标
    punishSer.bonusStart().then(function(response){
        if(response.data.code == 0){
            $scope.targets = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    $scope.collect = function(){
        var vm = $scope;
         var start =  angular.element('.start').val();
         var end =  angular.element('.end').val();
        vm.sum={
            area:vm.area,
            project:vm.project
        }; 
        vm.sum.start=start;
        vm.sum.end=end;
        punishSer.summary(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.punishmentLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
});





