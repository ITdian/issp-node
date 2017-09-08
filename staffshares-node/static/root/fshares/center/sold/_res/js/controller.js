var app = angular.module('centeSold', ['toastr']);
app.controller('centeSoldCtrl', function($scope, centeSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    centeSer.centeFindId(webData).then(function(response){
        if(response.data.code==0){
            $scope.cent = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.centEditFun = function(){
        var vm = $scope;
        centeSer.centeSold(vm.cent).then(function(response){
            if(response.data.code == 0){
                $state.go('root.fshares.center.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





