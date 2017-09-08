var app = angular.module('functionAdd', ['toastr']);
app.controller('functionAddCtrl', function ($scope, functionSer, $state, toastr) {

    //添加
    $scope.funAddFun = function () {
        var vm = $scope;
        vm.fun.entryTime = angular.element('.entryTime').val();
        vm.fun.positiveTime = angular.element('.positiveTime').val();
        vm.fun.subject = angular.element('.subject').val();
        functionSer.functionAdd(vm.fun).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.levelupskill.function.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




