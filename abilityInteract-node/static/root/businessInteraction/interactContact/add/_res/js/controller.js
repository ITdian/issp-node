var app = angular.module('contactAdd', ['toastr','ipCookie']);
app.controller('contactAddCtrl', function($scope, contactSer,$state,toastr,$location,ipCookie){

    //添加
    $scope.interactAddFun = function(){
        var vm = $scope;

        contactSer.addInteract(vm.contact).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.interactContact.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




