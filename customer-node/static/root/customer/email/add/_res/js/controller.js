var app = angular.module('emailAdd', ['toastr', 'angularjs-dropdown-multiselect']);
app.controller('emailAddCtrl', function($scope, emailSer, $state, toastr){

    //获取行业
    emailSer.getWorks().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });


    $scope.addEmailFun = function(){
        var vm = $scope;
        var data = {
            works : vm.words,
            sendNum : vm.sendNum,
            customerSendUnit:vm.customerSendUnit,
            customerCollectUnit:vm.customerCollectUnit,
            sendObjectList:vm.sendObjectList,
            remark:vm.remark
        }
        emailSer.addCusemail(data).then(function(response){
            console.info(response);
            if(response.data.code == 0){
                $state.go('root.customer.email.list');
                toastr.success("已成功添加", '温馨提示');
            } else if(response.data.code == 403){
                toastr.error("请登录用户", '温馨提示');
            }
        });

    };

    $scope.words = [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};



});





