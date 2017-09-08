var app = angular.module('standEdit', ['toastr']);
app.controller('standEditCtrl', function($scope, standSer,$stateParams,$state,toastr){
    var standEdit ={id: $stateParams.id};

    //获取ID
    standSer.findRepairId(standEdit).then(function(response){
        if(response.data.code==0){
            $scope.standEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //查询所有推荐要求
    standSer.infofind().then(function(response){
        if(response.data.code == 0){
            $scope.reqSche = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //编辑点击提交
    $scope.standEditFun = function(){
        var vm = $scope;
        vm.standEdit.id = $stateParams.id;
        standSer.editStand(vm.standEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.awardstandard.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





