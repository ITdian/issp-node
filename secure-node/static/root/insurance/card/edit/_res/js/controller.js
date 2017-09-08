var app = angular.module('cardEdit', ['toastr']);
app.controller('cardEditCtrl', function($scope, cardSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    cardSer.cardId(webData).then(function(response){
        if(response.data.code==0){
            $scope.card = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
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
    //编辑点击提交
    $scope.cardEditFun = function(){
        console.log(123)
        var vm = $scope;
        vm.card.reapply = angular.element('.reapply').val();
        cardSer.cardEdit(vm.card).then(function(response){
            if(response.data.code == 0){
                $state.go('root.insurance.card.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





