var app = angular.module('waitAdd', ['toastr']);
app.controller('waitAddCtrl', function ($scope, waitSer, $state, toastr) {
$scope.showed=true;
$scope.months=['1','2','3','4','5','6','7','8','9','10','11','12'];
    waitSer.getYear().then(function(response){
        if(response.data.code== 0){
            $scope.years = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
//合计
    $scope.changSelect = function(){
        $scope.wait.total=Number($scope.wait.rent)+Number($scope.wait.water)+Number($scope.wait.energy)+Number($scope.wait.fee)+Number($scope.wait.otherFee)
    };

    //添加
    $scope.openAddFun = function () {
        var vm = $scope;
        vm.wait.payTime = angular.element('.time').val();
        vm.wait.pay = angular.element('.p').val();

        waitSer.addWait(vm.wait).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.money.wait.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




