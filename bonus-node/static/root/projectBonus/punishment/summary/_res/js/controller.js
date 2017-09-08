var app = angular.module('summary', ['toastr']);
app.controller('summaryCtrl', function($scope, punishSer,toastr){
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
    $scope.all = function(){
        var vm = $scope;
         var start =  angular.element('.startTime').val();
         var end =  angular.element('.endTime').val();
        vm.sum={
            area:vm.area,
            project:vm.project
        };
        vm.sum.start=start;
        vm.sum.end=end;
        punishSer.punishmentAllPush(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.punishmentLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
    $scope.one = function(){
        var vm = $scope;
         var start =  angular.element('.startTime').val();
         var end =  angular.element('.endTime').val();
        vm.sum={
            area:vm.area,
            project:vm.project
        };
        vm.sum.start=start;
        vm.sum.end=end;
        punishSer.punishmentOnePush(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.punishmentLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
});





