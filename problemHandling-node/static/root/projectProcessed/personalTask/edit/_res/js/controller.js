var app = angular.module('taskEdit', ['toastr','ipCookie']);
app.controller('taskEditCtrl', function($scope, taskSer,$stateParams,$state,toastr,$location,ipCookie){
    var confirmData ={id: $stateParams.id};

    //获取ID
    taskSer.findAssignmentId(confirmData).then(function(response){
        if(response.data.code == 0){
            $scope.taskEdit = response.data.data;
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

    });

    //编辑点击提交
    $scope.taskEditFun = function(){
        var vm = $scope;

        taskSer.editAssignment(vm.taskEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectProcessed.personalTask.list');
                toastr.success( "编辑成功", '温馨提示');
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
        });

    };
    //可手填的下拉框
    $scope.changeSelect = function () {
        $scope.taskEdit.handler = $scope.taskEdit.handler1;
    };;

});





