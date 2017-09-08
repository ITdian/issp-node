    var app = angular.module('TypeAdd', ['toastr']);
app.controller('TypeAddCtrl', function($scope, TypeSer,$state,toastr){
    //添加
    $scope.TypeAddFun = function(){
        var vm = $scope;
        TypeSer.addType(vm.typeAdd).then(function(response){
             if(response.data.code == 0){
                $state.go('root.recomManagement.recommendtype.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




