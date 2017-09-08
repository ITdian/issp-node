var app = angular.module('summaryDay', ['toastr']);
app.controller('summaryDayCtrl', function($scope, areaMSer,toastr){
    $scope.showed=true;
    // 获取地区
    areaMSer.rentArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 获取绩效指标
    areaMSer.bonusStart().then(function(response){
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
        areaMSer.areaMatterAllPush(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.areaMatterLists = response.data.data;
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
        areaMSer.areaMatterOnePush(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.areaMatterLists = response.data.data;
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
});





