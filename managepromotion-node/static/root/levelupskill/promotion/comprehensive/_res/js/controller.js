var app = angular.module('promoComprehensive', ['toastr']);
app.controller('promoComprehensiveCtrl', function($scope, promoSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    promoSer.promoId(webData).then(function(response){
        if(response.data.code==0){
            $scope.com = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        promoSer.promoComprehensive(vm.com).then(function(response){
            if(response.data.code == 0){
                $state.go('root.levelupskill.promotion.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





