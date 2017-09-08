var app = angular.module('increAgoAdd', ['toastr']);
app.controller('increAgoAddCtrl', function ($scope, increAgoSer, $state, toastr) {

    //获取网站名称
    increAgoSer.getCompany().then(function(response){
        if(response.data.code==0){
            $scope.companys = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.increAddFun = function () {
        var vm = $scope;
        increAgoSer.increAgoAdd(vm.incre).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.insurance.increaseAgo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




