var app = angular.module('standAdd', ['toastr']);
app.controller('standAddCtrl', function($scope, standSer,$stateParams,$state,toastr){
    standSer.recomList().then(function(response){
        if(response.data.code == 0){
            $scope.reList = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
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
    //添加
    $scope.standAddFun = function(){
        var vm = $scope;
        vm.reqSche[0].id=vm.standAdd.requireId;
        standSer.addStand(vm.standAdd).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.awardstandard.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




