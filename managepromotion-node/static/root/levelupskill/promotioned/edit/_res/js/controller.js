var app = angular.module('webEdit', ['toastr']);
app.controller('webEditCtrl', function($scope, promoedSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    promoedSer.promoedId(webData).then(function(response){
        if(response.data.code==0){
            $scope.pro = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.proEditFun = function(){
        var vm = $scope;
        vm.pro.times = angular.element('.times').val();
        // vm.pro.status = angular.element('.status').val();
        promoedSer.promoedEdit(vm.pro).then(function(response){
            if(response.data.code == 0){
                $state.go('root.levelupskill.promotioned.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





