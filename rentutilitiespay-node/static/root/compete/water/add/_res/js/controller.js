var app = angular.module('waterAdd', ['toastr']);
app.controller('waterAddCtrl', function ($scope, waterSer, $state, toastr) {
$scope.showed=true
    // 地区
    waterSer.rentFindArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }
    });
    // 项目组
    waterSer.moneyGroup().then(function(response){
        if(response.data.code == 0){
            $scope.projectGroups = response.data.data;
        }
    });
    //添加
    $scope.waterAddFun = function(){
        $scope.vm.stayStartTime =  angular.element('.time1').val();
        $scope.vm.stayEndTime =  angular.element('.time2').val();
        $scope.vm.staffVerify =  angular.element('.yon1').val();
        $scope.vm.comprehensiveVerifySituation =  angular.element('.yon2').val();
        waterSer.waterAdd($scope.vm).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.water.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });
    };
});




