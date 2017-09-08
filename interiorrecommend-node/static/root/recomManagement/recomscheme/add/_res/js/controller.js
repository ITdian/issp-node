var app = angular.module('schemeAdd', ['toastr']);
app.controller('schemeAddCtrl', function($scope, schemeSer,$state,toastr){
    //添加
    $scope.schemeAddFun = function(){
        var vm = $scope;
        vm.schemeAdd.closeTime = angular.element('.closeTime').val();
        vm.schemeAdd.openTime = angular.element('.openTime').val();
        vm.schemeAdd.makeTime = angular.element('.makeTime').val();
        schemeSer.addScheme(vm.schemeAdd).then(function(response){

            if(response.data.code == 0){
                $state.go('root.recomManagement.recomscheme.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




