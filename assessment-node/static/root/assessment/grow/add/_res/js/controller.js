var app = angular.module('growAdd', ['toastr','ipCookie']);
app.controller('growAddCtrl', function ($scope, growSer, $state, toastr,ipCookie,$location) {
    growSer.allGrowProjects().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    //添加
    $scope.growAddFun = function () {
        var vm = $scope;
        growSer.addGrow(vm.add).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.assessment.grow.list');
                toastr.success("已成功添加", '温馨提示');
            }else if (response.data.code == 403||response.data.code == 401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});




