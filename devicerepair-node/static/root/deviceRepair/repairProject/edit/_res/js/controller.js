var app = angular.module('repairEdit', ['toastr']);
app.controller('repairEditCtrl', function($scope, repairSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};

    //获取ID
    repairSer.findRepairId(basicData).then(function(response){
        if(response.data.code==0){
            $scope.editBasic = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.Warranty = [{value:true,name:"是"},{value:false,name:"否"}];
    //获取所有入库编号
    repairSer.getNumber().then(function(response){
        if(response.data.code == 0){
            $scope.AllNum = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //获取添加中的所有地区
    repairSer.getAllArea().then(function(response){
        if(response.data.code==0){
            $scope.AllArea = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //获取添加中所有部门的名字
    repairSer.getAllOrage().then(function(response){
        if(response.data.code==0){
            $scope.AllOrage = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //获取所有用户
    repairSer.getAllGetPerson().then(function(response){
        if(response.data.code==0){
            $scope.AllGetPerson = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });

    //编辑点击提交
    $scope.basicEditFun = function(){
        var vm = $scope;
        vm.editBasic.siginTime = angular.element('.siginTime').val();
        vm.editBasic.startProjectTime = angular.element('.addTime').val();
        vm.editBasic.endProjectTime = angular.element('.endTime').val();
        repairSer.editRepair(vm.editBasic).then(function(response){
            if(response.data.code == 0){
                $state.go('root.deviceRepair.repairProject.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





