var app = angular.module('repairAdd', ['toastr']);
app.controller('repairAddCtrl', function($scope, repairSer,$state,toastr){
    //获取所有入库编号
    repairSer.getNumber().then(function(response){
        if(response.data.code == 0){
            $scope.AllNum = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    $scope.Warr=[{value:true,name:"是"},{value:false,name:"否"}];
    //获取添加中的所有地区
    repairSer.getAllArea().then(function(response){
        if(response.data.code==0){
            $scope.AllArea=response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //获取添加中所有部门的名字
    repairSer.getAllOrage().then(function(response){
        if(response.data.code==0){
            $scope.AllOrage=response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //获取所有用户
    repairSer.getAllGetPerson().then(function(response){
        if(response.data.code==0){
            $scope.AllGetPerson=response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //添加
    $scope.repairAddFun = function(){
        var vm = $scope;
        vm.repair.startProjectTime = angular.element('.addTime').val();
        vm.repair.endProjectTime = angular.element('.endTime').val();
        repairSer.addRepair(vm.repair).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.deviceRepair.repairProject.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




