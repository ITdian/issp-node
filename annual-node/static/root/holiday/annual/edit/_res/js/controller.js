var app = angular.module('annuEdit', ['toastr']);
app.controller('annuEditCtrl', function($scope, annuSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    annuSer.findAnnuId(webData).then(function(response){
        if(response.data.code==0){
            $scope.ann = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        // vm.ann.applyTime=angular.element('.applyTime').val();
        vm.ann.startTime=angular.element('.startTime').val();
        vm.ann.endTime=angular.element('.endTime').val();
        vm.ann.infoId=$stateParams.id;
        // console.log(vm.ann)
        annuSer.annuEdit(vm.ann).then(function(response){
            if(response.data.code == 0){
                $state.go('root.holiday.annual.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





