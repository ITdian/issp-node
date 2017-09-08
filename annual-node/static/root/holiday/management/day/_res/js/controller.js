var app = angular.module('manageDay', ['toastr']);
app.controller('manageDayCtrl', function($scope, manageSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    manageSer.findManageId(webData).then(function(response){
        if(response.data.code==0){
            $scope.man = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //获取岗位层级
    manageSer.annuTier().then(function(response){
        if(response.data.code==0){
            $scope.tiers = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        vm.man.standardId=$stateParams.id;
        console.log(vm.man)
        manageSer.manageDay(vm.man).then(function(response){
            if(response.data.code == 0){
                $state.go('root.holiday.management.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





