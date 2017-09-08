var app = angular.module('waterEdit', ['toastr']);
app.controller('waterEditCtrl', function($scope, waterSer,$stateParams,$state,toastr){
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
    var infoData ={id: $stateParams.id};
    //获取ID
    waterSer.waterId(infoData).then(function(response){
        if(response.data.code== 0){
            $scope.vm = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.waterEditFun = function(){
        $scope.vm.stayStartTime =  angular.element('.time1').val();
        $scope.vm.stayEndTime =  angular.element('.time2').val();
        $scope.vm.staffVerify =  angular.element('.yon1').val();
        $scope.vm.comprehensiveVerifySituation =  angular.element('.yon2').val();
        waterSer.waterEdit($scope.vm).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.water.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





