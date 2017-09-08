var app = angular.module('emailAdd', ['toastr']);
app.controller('emailAddCtrl', function($scope, emailSer,$state,toastr){
   //获取所有汇总
    $scope.objLists = [];
    $scope.addMail = function(){
        $scope.objLists.push($scope.sendObjectList);
        $scope.sendObjectList = '';
    };

    $scope.emails = ['个人邮箱','公邮','自由录入'];
    //添加
    $scope.EmailAddFun = function(){

        var vm = $scope;
        // vm.addEmails.condis = $scope.condis;
        vm.addEmails.sendObject = $scope.objLists;
        emailSer.addEmail(vm.addEmails).then(function(response){
            if(response.data.code == 0){
                $state.go('root.material.email.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
    $scope.dbSend = function (index) {
        $scope.objLists.splice(index,1);
    }
});




