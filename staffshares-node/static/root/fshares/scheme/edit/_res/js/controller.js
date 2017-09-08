var app = angular.module('schmEdit', ['toastr']);
app.controller('schmEditCtrl', function($scope, schmSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    schmSer.schmFindId(webData).then(function(response){
        if(response.data.code==0){
            $scope.sch = response.data.data;
            if($scope.sch.type=="PRIMITIVE"){
                $scope.sch.type="原始股"
            }else if($scope.sch.type=="PERFORMANCE"){
                $scope.sch.type="绩效股"
            }else if($scope.sch.type=="TRADABLE"){
                $scope.sch.type="流通股"
            }
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.schEditFun = function(){
        var vm = $scope;
        if($scope.sch.type=="原始股"){
            $scope.sch.type="PRIMITIVE"
        }else if($scope.sch.type=="绩效股"){
            $scope.sch.type="PERFORMANCE"
        }else if($scope.sch.type=="流通股"){
            $scope.sch.type="TRADABLE"
        }
        vm.sch.time = angular.element('.time').val();
        vm.sch.accountingTime = angular.element('.accountingTime').val();
        schmSer.schmEdit(vm.sch).then(function(response){
            if(response.data.code == 0){
                $state.go('root.fshares.scheme.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





