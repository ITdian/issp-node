var app = angular.module('schemeEdit', ['toastr']);
app.controller('schemeEditCtrl', function($scope, schemeSer,$stateParams,$state,toastr){
    var schemeEdit ={id: $stateParams.id};

    //获取ID
    schemeSer.findRepairId(schemeEdit).then(function(response){
        if(response.data.code==0){
            $scope.schemeEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.schemeEditFun = function(){
        var vm = $scope;
        vm.schemeEdit.closeTime = angular.element('.closeTime').val();
        vm.schemeEdit.openTime = angular.element('.openTime').val();
        vm.schemeEdit.makeTime = angular.element('.makeTime').val();
        schemeSer.editScheme(vm.schemeEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.recomscheme.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





