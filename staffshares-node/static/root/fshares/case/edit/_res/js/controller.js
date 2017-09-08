var app = angular.module('webEdit', ['toastr']);
app.controller('webEditCtrl', function($scope, caseSer,$stateParams,$state,toastr){
    var webData ={id: $stateParams.id};

    //获取ID
    caseSer.caseFindId(webData).then(function(response){
        if(response.data.code==0){
            $scope.cases = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });

    //编辑点击提交
    $scope.webEditFun = function(){
        var vm = $scope;
        vm.cases.time1 = angular.element('.time1').val();
        vm.cases.time2 = angular.element('.time2').val();
        vm.cases.time=vm.cases.time1+'~'+vm.cases.time2;
        vm.cases.dividendTime = angular.element('.dividendTime').val();
        vm.cases.id=$stateParams.id;
        console.log(vm.cases)
        caseSer.caseEdit(vm.cases).then(function(response){
            if(response.data.code == 0){
                $state.go('root.fshares.case.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





