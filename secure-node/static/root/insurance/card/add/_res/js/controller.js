var app = angular.module('cardAdd', ['toastr']);
app.controller('cardAddCtrl', function ($scope, cardSer, $state, toastr) {
    cardSer.getName().then(function(response){
        if(response.data.code == 0){
            $scope.names= response.data.data;
            // $scope.names=[{'username':'111'},{'username':'222'}]
        }
    });
    cardSer.getEmployeeNum().then(function(response){
        if(response.data.code == 0){
            $scope.employeeNums= response.data.data;
        }
    });
    cardSer.getCity().then(function(response){
        if(response.data.code == 0){
            $scope.citys= response.data.data;
        }
    });
    //添加
    $scope.cardAddFun = function () {
        var vm = $scope;
        vm.card.reapply = angular.element('.reapply').val();
        cardSer.cardAdd(vm.card).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.insurance.card.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




