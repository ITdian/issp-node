var app = angular.module('repairWelfare', ['toastr']);
app.controller('repairWelfareCtrl', function($scope, repairSer,$stateParams,$state,toastr){
    var WelfareData ={id: $stateParams.id};
  //获取ID
    repairSer.findRepairId(WelfareData).then(function(response){
        if(response.data.code==0){
            $scope.welfareId = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.welfareAudit = [{value:true,name:"是"},{value:false,name:"否"}];

   //设备维修福利模块审核
    $scope.repairWelfareFun = function(){
        var vm = $scope;
        // var data = {
        //     id:vm.WelfareBasic.id,
        //    // WelfareAdvice: vm.WelfareBasic.WelfareAdvice
        // };
        vm.welfareId.planOverRepairTime = angular.element('.overTime').val();
        vm.welfareId.planLoanTime = angular.element('.planTime').val();
         repairSer.welfareRepair(vm.welfareId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.deviceRepair.repairProject.list[12]');
                toastr.success("已成功审核", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});
