var app = angular.module('emailCongeal', ['toastr']);
app.controller('emailCongealCtrl',function($scope,emailSer,toastr,$stateParams,$state){
    //冻结
    $scope.congealYes = function(){
        var data = {
            id:$stateParams.id
        }
        console.log(data.id)
        emailSer.congealSummary(data).then(function(response){
            console.log(response)
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $state.go('root.marketActivity.email.list');
                $scope.conId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('congealId', $scope.conId)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});


