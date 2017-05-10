/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('profitfLossDelete', ['toastr']);
app.controller('profitfLossDeleteCtrl',function($scope,assetsSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        assetsSer.marketserveapplyDel1(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
               $state.go('root.initialize.sort.profitfLoss.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});
