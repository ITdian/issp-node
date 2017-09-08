var app = angular.module('schemegenAudit', ['toastr']);
app.controller('schemegenAuditCtrl', function($scope, schemeSer,$stateParams,$state,toastr){
    var schemegenAudit ={id: $stateParams.id};

    //获取ID
    schemeSer.findRepairId(schemegenAudit).then(function(response){
        if(response.data.code==0){
            $scope.schemegenAudit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.cancel = function(){//取消
        $state.go('root.recomManagement.recomscheme.list[12]',{id:null,name:null});
    };
    //编辑点击确定
    $scope.schemegenAuditFun = function(){
        var vm = $scope;
        schemeSer.genAudit(vm.genAudit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.recomscheme.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





