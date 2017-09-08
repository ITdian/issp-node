var app = angular.module('rewardAdd', ['toastr']);
app.controller('rewardAddCtrl', function ($scope, rewardSer, $state, toastr) {
$scope.showed=true
    // 获取绩效指标
    rewardSer.bonusStart().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 姓名
    rewardSer.rentName().then(function(response){
        if(response.data.code == 0){
            $scope.usernames = response.data.data;
        }
    });
    //添加
    $scope.rewardAddFun = function () {    
        $scope.vm.occurrence = angular.element('.time').val();
        // $scope.vm.biddingNumber = angular.element('.num').val();
        // $scope.vm.projectName = angular.element('.na').val();
        rewardSer.rewardAdd($scope.vm).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.projectBonus.reward.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




