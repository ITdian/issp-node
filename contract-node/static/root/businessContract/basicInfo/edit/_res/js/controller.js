var app = angular.module('basicEdit', ['toastr']);
app.controller('basicEditCtrl', function($scope, basicSer,$stateParams,$state,toastr){
    var basicData ={id: $stateParams.id};

    //获取ID
    basicSer.findBasicInfoId(basicData).then(function(response){
        if(response.data.code==0){
            $scope.editBasic = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.basicEditFun = function(){
        var vm = $scope;
        vm.editBasic.siginTime = angular.element('.siginTime').val();
        vm.editBasic.startProjectTime = angular.element('.addTime').val();
        vm.editBasic.endProjectTime = angular.element('.endTime').val();
        basicSer.editBasicInfo(vm.editBasic).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessContract.basicInfo.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





