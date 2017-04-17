var app = angular.module('detailDelete', ['toastr']);
app.controller('detailDeleteCtrl',function($scope,detailSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        }

        detailSer.deleteDetail(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.customer.detail.list');
                $scope.deledId = $stateParams.id;
                $scope.$emit('deletedId', $scope.deledId)
                $scope.$emit('changeId', null)
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});


