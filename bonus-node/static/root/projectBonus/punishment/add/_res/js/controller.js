var app = angular.module('punishmentAdd', ['toastr']);
app.controller('punishAddCtrl', function ($scope, punishSer, $state, toastr) {
$scope.showed=true
   // 获取绩效指标
    punishSer.bonusStart().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 姓名
    punishSer.rentName().then(function(response){
        if(response.data.code == 0){
            $scope.usernames = response.data.data;
        }
    });
    //添加
    $scope.openAddFun = function () {

        $scope.vm.occurrence = angular.element('.time1').val();

        punishSer.punishmentAdd($scope.vm).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.projectBonus.punishment.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




