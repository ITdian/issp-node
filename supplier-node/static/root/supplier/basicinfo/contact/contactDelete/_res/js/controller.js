var app = angular.module('contactDelete', ['toastr','ipCookie']);
app.controller('contactDeleteCtrl',function($scope,basicinfoSer,toastr,$stateParams,$state,ipCookie,$location){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.suId
        };
        basicinfoSer.deleteContact(data).then(function(response){
             if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.supplier.basicinfo.contact');
                $scope.deledSubId = $stateParams.suId;
                //向父Ctrl传递事件
                $scope.$emit('deledSubId', $scope.deledSubId)
            }else if (response.data.code == 403||response.data.code == 401) {
                 toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                 var absurl = $location.absUrl();
                 ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                 setTimeout(function(){
                     window.location.href='http://localhost/login'
                 },3000)
             }
        })
    }


});
