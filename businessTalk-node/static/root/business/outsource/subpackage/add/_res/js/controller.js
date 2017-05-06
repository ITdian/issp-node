/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('subpackageAdd', ['toastr']);
app.controller('subpackageAddCtrl', function($scope, subpackageSer,$state,toastr){
    //添加
    $scope.companyAddFun = function(){
        $scope.data.communicateDate = angular.element('.Time').val();//洽谈时间
        $scope.data.costBudget = Number($scope.num).toFixed(2);//项目预算
        var data = $scope.data;
        subpackageSer.addMarketserveapply(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.business.outsource.subpackage.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
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




