var app = angular.module('confirmDelete', ['toastr','ipCookie']);
app.controller('confirmDeleteCtrl',function($scope,confirmSer,toastr,$stateParams,$state,$location,ipCookie){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        };

        confirmSer.deleteResult(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.projectProcessed.confirmProblem.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
                $scope.$emit('changeId', null);
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login';
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }


});


