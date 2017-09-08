var app = angular.module('webEdit', ['toastr']);
app.controller('webEditCtrl', function($scope, leadSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    leadSer.findLeadId(webData).then(function(response){
        if(response.data.code==0){
            $scope.lead = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        leadSer.leadEdit(vm.lead).then(function(response){
            if(response.data.code == 0){
                $state.go('root.holiday.leave.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





