var app = angular.module('emailEdit', ['toastr']);
app.controller('emailEditCtrl', function($scope, emailSer,$stateParams,$state,toastr){
    var emailData ={id: $stateParams.id};

    //获取ID
    emailSer.emailId(emailData).then(function(response){

        if(response.data.code==0){
            $scope.editMail = response.data.data;

            $scope.objLists = $scope.editMail.sendObject.split(';');

            $scope.objLists.reUndefined();
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });

    // $scope.stringSettings = {displayProp: 'value',idProperty: 'id'};
    //获取所有汇总
    $scope.objLists = [];
    $scope.addMail = function(){
        $scope.objLists.push($scope.sendObjectList);
        $scope.sendObjectList = '';
    };

    $scope.emails = ['个人邮箱','公邮','自由录入'];
    //编辑点击提交
    $scope.emailEditFun = function(){
        var vm = $scope;
        vm.editMail.sendObject = $scope.objLists;
        emailSer.editEmail(vm.editMail).then(function(response){
            if(response.data.code == 0){
                $state.go('root.material.email.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
    $scope.dbSend = function (index) {
        $scope.objLists.splice(index,1);
    }
});





