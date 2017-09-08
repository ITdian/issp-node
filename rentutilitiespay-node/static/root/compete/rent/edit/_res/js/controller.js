var app = angular.module('rentEdit', ['toastr']);
app.controller('rentEditCtrl', function($scope, rentSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
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
    //获取ID
    rentSer.rentId(infoData).then(function(response){
        if(response.data.code==0){
            $scope.vm = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.rentEditFun = function(){
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
        rentSer.rentEdit($scope.vm).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.rent.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





