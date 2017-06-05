var app = angular.module('emailAdd', ['toastr']);
app.controller('emailAddCtrl', function($scope, emailSer,$state,toastr){

    //添加
    $scope.emailAddFun = function(){
        var vm = $scope;
        var data = $scope.data;
        emailSer.addSummery(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.summary.email.list');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
    
});





