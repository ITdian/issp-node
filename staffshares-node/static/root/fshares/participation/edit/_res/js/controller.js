var app = angular.module('webEdit', ['toastr']);
app.controller('webEditCtrl', function($scope, partSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    partSer.partFindId(webData).then(function(response){
        if(response.data.code==0){
            $scope.partic = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        vm.partic.id=$stateParams.id;
        partSer.partEdit(vm.partic).then(function(response){
            if(response.data.code == 0){
                $state.go('root.fshares.participation.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





