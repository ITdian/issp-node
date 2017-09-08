var app = angular.module('manageAdd', ['toastr']);
app.controller('manageAddCtrl', function ($scope, manageSer, $state, toastr) {

    //添加
    $scope.manAddFun = function () {
        var vm = $scope;
        if($scope.man.startCycle<1){
            alert("开始工龄范围最小为1")
            $state.go('root.holiday.management.list[12]');
            return;
        }else if($scope.man.endCycle<1){
            alert("结束工龄范围最小为1")
            $state.go('root.holiday.management.list[12]');
            return;
        }else if($scope.man.astrict<0){
            alert("病假限制(月)最小为0")
            $state.go('root.holiday.management.list[12]');
            return;
        }
        manageSer.manageAdd(vm.man).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.holiday.management.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




