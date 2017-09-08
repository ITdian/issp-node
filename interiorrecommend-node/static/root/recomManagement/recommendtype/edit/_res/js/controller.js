var app = angular.module('TypeEdit', ['toastr']);
app.controller('TypeEditCtrl', function($scope, TypeSer,$stateParams,$state,toastr){
    var TypeEdit ={id: $stateParams.id};

    //获取ID
    TypeSer.findRepairId(TypeEdit).then(function(response){
        if(response.data.code==0){
            $scope.TypeEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.typeEditFun = function(){
        var vm = $scope;
        TypeSer.editType(vm.TypeEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.recommendtype.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





