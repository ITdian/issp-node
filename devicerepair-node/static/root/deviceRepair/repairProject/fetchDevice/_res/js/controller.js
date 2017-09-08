var app = angular.module('fetchDevice', ['toastr']);
app.controller('fetchDeviceCtrl', function($scope, repairSer,$stateParams,$state,toastr){
    var fetchData ={id: $stateParams.id};
    //获取ID
    repairSer.findRepairId(fetchData).then(function(response){
        if(response.data.code==0){
            $scope.fetchDataId = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.fetchDevice = [{value:true,name:"是"},{value:false,name:"否"}];
    //设备维修取回设备
    $scope.repairfetchFun = function(){
        var vm = $scope;
        vm.fetchDataId.id = $stateParams.id;
        repairSer.repairFetch(vm.fetchDataId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.deviceRepair.repairProject.list[12]');
                toastr.success("已成功审核", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});

