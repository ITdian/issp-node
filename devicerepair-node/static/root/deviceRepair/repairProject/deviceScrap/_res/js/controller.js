var app = angular.module('repairScrap', ['toastr']);
app.controller('repairScrapCtrl', function($scope, repairSer,$stateParams,$state,toastr){
    var scrapData ={id: $stateParams.id};
    //获取ID
    repairSer.findRepairId(scrapData).then(function(response){
        if(response.data.code==0){
            $scope.ScrapId = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //设备维修设备报废
    $scope.repairScrapFun = function(){
        var vm = $scope;
        vm.ScrapId.id=$stateParams.id;
        repairSer.repairScrap(vm.ScrapId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.deviceRepair.repairProject.list[12]');
                toastr.success("已成功审核", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});
