var app = angular.module('subscripEditCtrl', ['toastr']);
app.controller('subscripEditCtrl', function($scope, subscripSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    subscripSer.subscripFindId(webData).then(function(response){
        if(response.data.code==0){
            $scope.subscrip = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        vm.subscrip={
            purchaseNum:vm.subscrip.purchaseNum,
            id: $stateParams.id
        }
        subscripSer.subscripEdit(vm.subscrip).then(function(response){
            if(response.data.code == 0){
                $state.go('root.fshares.subscription.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





