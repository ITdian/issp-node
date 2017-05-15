var app = angular.module('sortAdd', ['toastr','ipCookie']);
app.controller('sortAddCtrl', function($scope,$state,toastr,sortSer,ipCookie,$location){

    $scope.sortAddFun = function(){
        var vm = $scope;
        sortSer.addSort(vm.sort).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.sort.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });
    };
});





