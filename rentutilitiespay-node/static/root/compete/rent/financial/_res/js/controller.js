var app = angular.module('rentFinancial', ['toastr']);
app.controller('rentFinancialCtrl', function($scope, rentSer,$stateParams,$state,toastr){
    var infoData ={id: $stateParams.id};
    $scope.showed=true
    //获取ID
    rentSer.rentId(infoData).then(function(response){
        if(response.data.code==0){
            $scope.vm = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.rentEditFun = function(){
        $scope.vm={
            operatingPay:$scope.vm.operatingPay,
            id: $stateParams.id
        };
        console.log($scope.vm)
        rentSer.rentFinancial($scope.vm).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.rent.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





