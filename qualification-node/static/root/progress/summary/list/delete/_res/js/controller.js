/**
 * Created by ike on 2017/4/17.
 */
var app = angular.module('delete', ['toastr','ipCookie']);
app.controller('deleteCtrl',function($scope,toastr,$stateParams,$state,ipCookie,$location,summarySer){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.id
        };
        summarySer.deleteProgress(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
               $state.go('root.progress.summary.list');

                //向父Ctrl传递事件
                $scope.$emit('deletedId', $stateParams.id)
            }else if(response.data.code==403){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }


});
