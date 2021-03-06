var app = angular.module('waitEdit', ['toastr']);
app.controller('waitEditCtrl', function($scope, waitSer,$stateParams,$state,toastr){
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

    var infoData ={id: $stateParams.id};
    //获取ID
    waitSer.findWaitId(infoData).then(function(response){
        if(response.data.code== 0){
            $scope.wait = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.openEditFun = function(){
        var vm = $scope;
        vm.wait.payTime = angular.element('.time').val();
        vm.wait.pay = angular.element('.p').val();
        waitSer.editWait(vm.wait).then(function(response){
            if(response.data.code == 0){
                $state.go('root.money.wait.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





