var app = angular.module('salaryConfirmAdd', ['toastr','ipCookie']);
app.controller('salaryConfirmAddCtrl', function($scope, salaryConfirmSer,$state,toastr,$location,ipCookie){

    //添加
    $scope.AddFun = function(){
        var data = $scope.data;
        data.entryTime = angular.element('.entryTime').val();
        salaryConfirmSer.addConfirm(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.employeeEntry.salaryConfirm.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});




