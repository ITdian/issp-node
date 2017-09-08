var app = angular.module('promoGeneral', ['toastr']);
app.controller('promoGeneralCtrl', function($scope, promoSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    promoSer.promoId(webData).then(function(response){
        if(response.data.code==0){
            $scope.gen = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        promoSer.promoGeneral(vm.gen).then(function(response){
            if(response.data.code == 0){
                $state.go('root.levelupskill.promotion.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





