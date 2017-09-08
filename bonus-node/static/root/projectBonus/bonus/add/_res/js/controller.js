var app = angular.module('bonusAdd', ['toastr']);
app.controller('bonuAddCtrl', function ($scope, bonuSer, $state, toastr) {
$scope.showed=true
    //添加
    $scope.bonusAddFun = function () {
        $scope.vm.difference =  angular.element('.yon1').val();
        bonuSer.bonusAdd($scope.vm).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.projectBonus.bonus.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




