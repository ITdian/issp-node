var app = angular.module('typeDelete', ['toastr']);
app.controller('typeDeleteCtrl',function($scope,businessTypeSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        };

        businessTypeSer.deleteBusinessType(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.developProgress.other.businessType.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId);
                $scope.$emit('changeId', null);
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }


});


