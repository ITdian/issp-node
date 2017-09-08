var app = angular.module('inforEdit', ['toastr']);
app.controller('inforEditCtrl', function($scope, inforSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    inforSer.inforId(webData).then(function(response){
        if(response.data.code==0){
            $scope.infor = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    inforSer.getName().then(function(response){
        if(response.data.code == 0){
            $scope.names= response.data.data;
            // $scope.names=[{'username':'111'},{'username':'222'}]
        }
    });
    inforSer.getEmployeeNum().then(function(response){
        if(response.data.code == 0){
            $scope.employeeNums= response.data.data;
        }
    });
    //根据姓名获取数据
    $scope.changSelect = function(){
        var obj={name:$scope.infor.name};
        inforSer.getIdCart(obj).then(function(response){
            if(response.data.code == 0){
                $scope.idCarts= response.data.data;
            }
        });
        inforSer.getBorn(obj).then(function(response){
            if(response.data.code == 0){
                $scope.borns= response.data.data;
            }
        });
        inforSer.getTel(obj).then(function(response){
            if(response.data.code == 0){
                $scope.tels= response.data.data;
            }
        });
    };
    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        vm.infor.startTime = angular.element('.startTime').val();
        vm.infor.officialTime = angular.element('.officialTime').val();
        vm.infor.beforeTime = angular.element('.beforeTime').val();
        vm.infor.secureTime = angular.element('.secureTime').val();
        inforSer.inforEdit(vm.infor).then(function(response){
            if(response.data.code == 0){
                $state.go('root.insurance.information.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





