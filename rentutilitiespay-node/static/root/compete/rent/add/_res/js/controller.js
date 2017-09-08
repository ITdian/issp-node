var app = angular.module('rentAdd', ['toastr']);
app.controller('rentAddCtrl', function ($scope, rentSer, $state, toastr) {
    $scope.showed=true
    // 地区
    rentSer.rentFindArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }
    });
    // 项目组
    rentSer.moneyGroup().then(function(response){
        if(response.data.code == 0){
            $scope.projectGroups = response.data.data;
        }
    });
    //添加
    $scope.rentAddFun = function(){
        $scope.vm.payDate =  angular.element('.time1').val();
        $scope.vm.rentDate =  angular.element('.time2').val();
        $scope.vm.paymentDate =  angular.element('.time3').val();
        $scope.vm.rentStartTime =  angular.element('.time4').val();
        $scope.vm.rentEndTime =  angular.element('.time5').val();
        $scope.vm.waterStartTime =  angular.element('.time6').val();
        $scope.vm.waterEndTime =  angular.element('.time7').val();
        $scope.vm.energyStartTime =  angular.element('.time8').val();
        $scope.vm.energyEndTime =  angular.element('.time9').val();
        $scope.vm.gasStartTime =  angular.element('.time10').val();
        $scope.vm.gasEndTime =  angular.element('.time11').val();
        $scope.vm.rentMoneyMail=  angular.element('.yon2').val();
        //只取两位小数
        // $scope.vm.income = Number($scope.income).toFixed(2);
        // $scope.vm.expenditure = Number($scope.expenditure).toFixed(2);
        console.log($scope.vm)
        rentSer.rentAdd($scope.vm).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.rent.list[12]');
                toastr.success( "成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        });

    };
});




