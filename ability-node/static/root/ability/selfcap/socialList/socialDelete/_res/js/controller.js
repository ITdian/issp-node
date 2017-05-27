var app = angular.module('socialDelete', ['toastr','ipCookie']);
app.controller('socialDeleteCtrl',function($scope,selfcapSer,toastr,$stateParams,$state,ipCookie,$location){
    //删除
    $scope.delYes = function(){
        var data = {
            id :$stateParams.subId
        };
             selfcapSer.deleteSocialSelf(data).then(function(response){
             if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.ability.selfcap.socialList');
                $scope.deledSubId = $stateParams.subId;
                //向父Ctrl传递事件
                $scope.$emit('deledSubId', $scope.deledSubId)
            }else if (response.data.code == 403||response.data.code==401) {
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
