var app = angular.module('angleEdit', ['toastr','ipCookie']);
app.controller('angleEditCtrl', function($scope,$state,toastr,$stateParams,angleSer,ipCookie,$location){

    var angleData ={id: $stateParams.id};
    angleSer.getAngle(angleData).then(function(response){
        if(response.data.code == 0){
            $scope.editAngle = response.data.data
        }
    });

    //提交编辑
    $scope.angleEditFun = function(){
        var vm = $scope;
        angleSer.editAngle(vm.editAngle).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.angle.list');
                toastr.success( "已成功编辑", '温馨提示');
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





