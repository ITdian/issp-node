    var app = angular.module('repairpmAudit', ['toastr']);
    app.controller('repairpmAuditCtrl', function($scope, repairSer,$stateParams,$state,toastr){
        var pmAuditData ={id: $stateParams.id};
        //获取ID
        repairSer.findRepairId(pmAuditData).then(function(response){
            if(response.data.code==0){
                $scope.pmAuditId = response.data.data;
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }

        });
        //设备维修项目经理审核
        $scope.pmAuditFun = function(){
            var vm = $scope;
            vm.pmAuditId.id = $stateParams.id;
             repairSer.auditRepair(vm.pmAuditId).then(function(response){
                if(response.data.code == 0){
                    $state.go('root.deviceRepair.repairProject.list[12]');
                    toastr.success("已成功审核", '温馨提示');
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });

        };

    });
