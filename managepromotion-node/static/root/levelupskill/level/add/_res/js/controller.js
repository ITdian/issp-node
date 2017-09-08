var app = angular.module('levelAdd', ['toastr']);
app.controller('levelAddCtrl', function ($scope, levelSer, $state, toastr) {

    //添加
    $scope.levelAddFun = function () {
        var vm = $scope;
        vm.level.positiveTime = angular.element('.positiveTime').val();
        vm.level.acquisitionTime = angular.element('.acquisitionTime').val();
        vm.level.subject = angular.element('.subject').val();
        levelSer.levelAdd(vm.level).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.levelupskill.level.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




