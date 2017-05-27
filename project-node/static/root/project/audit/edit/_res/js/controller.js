var app = angular.module('auditEdit', ['toastr','ipCookie']);
app.controller('auditEditCtrl', function($scope, auditSer,$state,toastr,$stateParams,ipCookie,$location){
    var auditId = {id : $stateParams.id};
    //获取值
    auditSer.getAuditById(auditId).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope. auditProjectEditFun = function(){
        var vm = $scope;
        auditSer.editAudit(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.project.audit.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com'});
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});