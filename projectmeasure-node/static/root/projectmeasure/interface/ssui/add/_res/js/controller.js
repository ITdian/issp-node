var app = angular.module('ssuiAdd', ['toastr']);
app.controller('ssuiAddCtrl', function($scope, ssuiSer,$state,toastr){
    //添加
    $scope.companyAddFun = function(){
        var data = $scope.data;
        ssuiSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.interface.ssui.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //控制数字不能小于1
    $scope.changeNum =function(){
        if($scope.data.predictAttendNo < 1){
            $scope.data.predictAttendNo = 1;
        }
    }
});




