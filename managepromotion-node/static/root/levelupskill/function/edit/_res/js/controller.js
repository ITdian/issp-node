var app = angular.module('functionEdit', ['toastr']);
app.controller('functionEditCtrl', function($scope, functionSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    functionSer.functionId(webData).then(function(response){
        if(response.data.code==0){
            $scope.fun = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        vm.fun.entryTime = angular.element('.entryTime').val();
        vm.fun.positiveTime = angular.element('.positiveTime').val();
        vm.fun.subject = angular.element('.subject').val();
        functionSer.functionEdit(vm.fun).then(function(response){
            if(response.data.code == 0){
                $state.go('root.levelupskill.function.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





