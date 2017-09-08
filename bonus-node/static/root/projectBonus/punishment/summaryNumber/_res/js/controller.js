var app = angular.module('summaryNumber', ['toastr']);
app.controller('summaryNumberCtrl', function($scope, punishSer,toastr){
    $scope.showed=true;
    // 获取地区
    punishSer.rentArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 获取项目名称
    punishSer.moneyGroup().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
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
            project:vm.project,
            target:vm.target
        };
        vm.sum.start=start;
        vm.sum.end=end;
        punishSer.numberSummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.punishmentLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
});





