var app = angular.module('annuAdd', ['toastr']);
app.controller('annuAddCtrl', function ($scope, annuSer, $state, toastr) {
    //获取姓名
    annuSer.annuName().then(function(response){
        if(response.data.code==0){
            $scope.names = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取地区
    annuSer.annuArea().then(function(response){
        if(response.data.code==0){
            $scope.areas = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取岗位
    annuSer.annuJobs().then(function(response){
        if(response.data.code==0){
            $scope.jobs = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取项目组/部门
    annuSer.annuProject().then(function(response){
        if(response.data.code==0){
            $scope.projects = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取岗位层级
    annuSer.annuTier().then(function(response){
        if(response.data.code==0){
            $scope.tiers = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.annAddFun = function () {
        var vm = $scope;
        vm.ann.entryTime=angular.element('.entryTime').val();
        annuSer.annuAdd(vm.ann).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.holiday.annual.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});