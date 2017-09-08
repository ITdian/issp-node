var app = angular.module('punishEdit', ['toastr']);
app.controller('punishEditCtrl', function($scope, punishSer,$stateParams,$state,toastr){
$scope.showed=true
    var infoData ={id: $stateParams.id};
    //获取ID
    punishSer.findById(infoData).then(function(response){
        if(response.data.code== 0){
            $scope.vm = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    // 获取绩效指标
    punishSer.bonusStart().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 姓名
    punishSer.rentName().then(function(response){
        if(response.data.code == 0){
            $scope.usernames = response.data.data;
        }
    });

    //编辑点击提交
    $scope.openEditFun = function(){
        var vm = $scope;

        $scope.vm.occurrence = angular.element('.time1').val();

        punishSer.edit($scope.vm).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectBonus.punishment.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





