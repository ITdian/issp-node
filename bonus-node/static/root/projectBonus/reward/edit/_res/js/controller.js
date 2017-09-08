var app = angular.module('rewardEdit', ['toastr']);
app.controller('rewardEditCtrl', function($scope, rewardSer,$stateParams,$state,toastr){
$scope.showed=true
    var infoData ={id: $stateParams.id};
    //获取ID
    rewardSer.findById(infoData).then(function(response){
        if(response.data.code== 0){
            $scope.vm = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    // 获取绩效指标
    rewardSer.bonusStart().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 姓名
    rewardSer.rentName().then(function(response){
        if(response.data.code == 0){
            $scope.usernames = response.data.data;
        }
    });
    //编辑点击提交
    $scope.rewardEditFun = function(){
        $scope.vm.occurrence = angular.element('.time').val();
        rewardSer.edit($scope.vm).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectBonus.reward.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





