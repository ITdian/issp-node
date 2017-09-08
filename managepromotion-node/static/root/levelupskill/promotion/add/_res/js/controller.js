var app = angular.module('promoAdd', ['toastr']);
app.controller('promoAddCtrl', function ($scope, promoSer, $state, toastr) {

    //添加
    $scope.promoAddFun = function () {
        var vm = $scope;
        vm.promo.acquisitionTime = angular.element('.acquisitionTime').val();
        vm.promo.positiveTime = angular.element('.positiveTime').val();
        vm.promo.subject = angular.element('.subject').val();
        console.log(vm.promo)
        promoSer.promoAdd(vm.promo).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.levelupskill.promotion.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




