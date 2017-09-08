var app = angular.module('schmAdd', ['toastr']);
app.controller('schmAddCtrl', function ($scope, schmSer, $state, toastr) {

    //添加
    $scope.schAddFun = function () {
        var vm = $scope;
        if(vm.sch.type=='原始股'){
            vm.sch.type='PRIMITIVE'
        }else if(vm.sch.type=='绩效股'){
            vm.sch.type='PERFORMANCE'
        }else if(vm.sch.type=='流通股'){
            vm.sch.type='TRADABLE'
        }
        

        vm.sch={
            accountingTime:angular.element('.accountingTime').val(),
            time:angular.element('.time').val(),
            type:vm.sch.type,
            name:vm.sch.name,
            aim:vm.sch.aim,
            totalCapital:vm.sch.totalCapital,
            totalEquity:vm.sch.totalEquity,
            facevalue:vm.sch.facevalue,
            planCapital:vm.sch.planCapital,
            publisher:vm.sch.publisher,
            issue:vm.sch.issue,
            proportion:vm.sch.proportion,
            number:vm.sch.number,
            price:vm.sch.price,
            object:vm.sch.object,
            mode:vm.sch.mode,
            method:vm.sch.method,
            standards:vm.sch.standards,
            remark:vm.sch.remark
        }
        schmSer.schmAdd(vm.sch).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.fshares.scheme.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});




