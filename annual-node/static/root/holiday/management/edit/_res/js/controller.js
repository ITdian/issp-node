var app = angular.module('manageEdit', ['toastr']);
app.controller('manageEditCtrl', function($scope, manageSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    manageSer.findManageId(webData).then(function(response){
        if(response.data.code==0){
            $scope.man = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.manEditFun = function(){
        var vm = $scope;
        if($scope.man.startCycle<1){
            alert("开始工龄范围最小为1")
            $state.go('root.holiday.management.list[12]');
            return;
        }else if($scope.man.endCycle<1){
            alert("结束工龄范围最小为1")
            $state.go('root.holiday.management.list[12]');
            return;
        }else if($scope.man.astrict<0){
            alert("病假限制(月)最小为0")
            $state.go('root.holiday.management.list[12]');
            return;
        }
        manageSer.manageEdit(vm.man).then(function(response){
            if(response.data.code == 0){
                $state.go('root.holiday.management.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





