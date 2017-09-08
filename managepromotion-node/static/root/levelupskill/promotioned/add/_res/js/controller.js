var app = angular.module('promoedAdd', ['toastr']);
app.controller('promoedAddCtrl', function ($scope, promoedSer, $state, toastr) {

    //添加
    $scope.proAddFun = function () {
        var vm = $scope;
        vm.pro.times = angular.element('.times').val();
        // vm.pro.status = angular.element('.status').val();
        promoedSer.promoedAdd(vm.pro).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.levelupskill.promotioned.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




