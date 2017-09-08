var app = angular.module('webEdit', ['toastr']);
app.controller('webEditCtrl', function($scope, represSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        represSer.represEdit(vm.repre).then(function(response){
            if(response.data.code == 0){
                $state.go('root.fshares.representative.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





