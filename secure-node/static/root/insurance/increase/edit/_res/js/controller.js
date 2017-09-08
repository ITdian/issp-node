var app = angular.module('increEdit', ['toastr']);
app.controller('increEditCtrl', function($scope, increSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};
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
    //获取ID
    increSer.increId(webData).then(function(response){
        if(response.data.code==0){
            $scope.incre = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.increEditFun = function(){
        var vm = $scope;
        vm.incre.startTime = angular.element('.startTime').val();
        vm.incre.officialTime = angular.element('.officialTime').val();
        vm.incre.secureTime = angular.element('.secureTime').val();
        increSer.increEdit(vm.incre).then(function(response){
            if(response.data.code == 0){
                $state.go('root.insurance.increase.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





