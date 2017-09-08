var app = angular.module('levelEdit', ['toastr']);
app.controller('levelEditCtrl', function($scope, levelSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    levelSer.levelId(webData).then(function(response){
        if(response.data.code==0){
            $scope.level = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.levelEditFun = function(){
        var vm = $scope;
        vm.level.positiveTime = angular.element('.positiveTime').val();
        vm.level.acquisitionTime = angular.element('.acquisitionTime').val();
        vm.level.subject = angular.element('.subject').val();
        levelSer.levelEdit(vm.level).then(function(response){
            if(response.data.code == 0){
                $state.go('root.levelupskill.level.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





