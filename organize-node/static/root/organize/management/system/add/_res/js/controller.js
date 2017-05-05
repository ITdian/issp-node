var app = angular.module('systemAdd', ['toastr']);
app.controller('systemAddCtrl', function($scope,$state,toastr,systemSer){

    $scope.systemAddFun = function(){
        var vm = $scope;
        var data = {
            serialNumber : vm.serialNumber,
            hierarchy : vm.hierarchy,
            description : vm.description,
        };
        systemSer.addSystem(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.system.list');
                toastr.success( vm.serialNumber+"已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});





