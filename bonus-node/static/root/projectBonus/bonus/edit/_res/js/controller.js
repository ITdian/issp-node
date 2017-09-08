var app = angular.module('bonuEdit', ['toastr']);
app.controller('bonuEditCtrl', function($scope, bonuSer,$stateParams,$state,toastr){
$scope.showed=true
    var infoData ={id: $stateParams.id};
    //获取ID
    bonuSer.bonusId(infoData).then(function(response){
        if(response.data.code== 0){
            $scope.vm = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.bonusEditFun = function(){
        bonuSer.bonusEdit($scope.vm).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectBonus.bonus.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





