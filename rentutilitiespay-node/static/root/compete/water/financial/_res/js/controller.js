var app = angular.module('waterFinancial', ['toastr']);
app.controller('waterFinancialCtrl', function($scope, waterSer,$stateParams,$state,toastr){
$scope.showed=true
    var infoData ={id: $stateParams.id};
    //获取ID
    waterSer.waterId(infoData).then(function(response){
        if(response.data.code== 0){
            $scope.vm = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //点击提交
    $scope.openEditFun = function(){
        $scope.vm.id=$stateParams.id;
        waterSer.waterFinancialEdit($scope.vm).then(function(response){
            if(response.data.code == 0){
                $state.go('root.compete.water.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





