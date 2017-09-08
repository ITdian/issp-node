var app = angular.module('increAdd', ['toastr']);
app.controller('increAddCtrl', function ($scope, increSer, $state, toastr) {
    increSer.getName().then(function(response){
        if(response.data.code == 0){
            $scope.names= response.data.data;
            // $scope.names=[{'username':'111'},{'username':'222'}]
        }
    });
    increSer.getEmployeeNum().then(function(response){
        if(response.data.code == 0){
            $scope.employeeNums= response.data.data;
        }
    });
    increSer.getCity().then(function(response){
        if(response.data.code == 0){
            $scope.citys= response.data.data;
        }
    });
    increSer.getTeam().then(function(response){
        if(response.data.code == 0){
            $scope.teams= response.data.data;
        }
    });
    increSer.getJob().then(function(response){
        if(response.data.code == 0){
            $scope.jobs= response.data.data;
        }
    });
    increSer.getJobLevel().then(function(response){
        if(response.data.code == 0){
            $scope.jobLevels= response.data.data;
        }
    });
    //根据姓名获取数据
    $scope.changSelect = function(){
        var obj={name:$scope.incre.name};
        increSer.getIdCart(obj).then(function(response){
            if(response.data.code == 0){
                $scope.idCarts= response.data.data;
            }
        });
        increSer.getBorn(obj).then(function(response){
            if(response.data.code == 0){
                $scope.borns= response.data.data;
            }
        });
        increSer.getTel(obj).then(function(response){
            if(response.data.code == 0){
                $scope.tels= response.data.data;
            }
        });
    };
    //添加
    $scope.increAddFun = function () {
        var vm = $scope;
        vm.incre.startTime = angular.element('.startTime').val();
        vm.incre.officialTime = angular.element('.officialTime').val();
        increSer.increAdd(vm.incre).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.insurance.increase.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




