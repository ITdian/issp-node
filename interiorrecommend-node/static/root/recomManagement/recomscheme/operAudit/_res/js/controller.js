var app = angular.module('schemeoperAudit', ['toastr']);
app.controller('schemeoperAuditCtrl', function($scope, schemeSer,$stateParams,$state,toastr){
    var schemeoper ={id: $stateParams.id};

    //获取ID
    schemeSer.findRepairId(schemeoper).then(function(response){
        if(response.data.code==0){
            $scope.schemeoper = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.cancel = function(){//取消
        $state.go('root.recomManagement.recomscheme.list[12]',{id:null,name:null});
    };
    //编辑点击确定
    $scope.schemeoperAuditFun = function(){
        var vm = $scope;
        schemeSer.schemeAudit(vm.schemeoper).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.recomscheme.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





