var app = angular.module('centeBuy', ['toastr']);
app.controller('centeBuyCtrl', function($scope, centeSer,$stateParams,$state,toastr){
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
        vm.cent={
            purchaseNum:vm.cent.purchaseNum,
            id: $stateParams.id
        }
        centeSer.centeBuy(vm.cent).then(function(response){
            if(response.data.code == 0){
                $state.go('root.fshares.center.list[12]');
                toastr.success( "编辑成功", '温馨提示');
                alert('已申请购买，如需修改或查看是否成功请到干股申购表处查看，谢谢')
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





