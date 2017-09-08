var app = angular.module('awardEdit', ['toastr']);
app.controller('awardEditCtrl', function($scope, awardSer,$stateParams,$state,toastr){
    var requireEdit ={id: $stateParams.id};
    //根据id来查询单个数据
    awardSer.findId(requireEdit).then(function(response){
        if(response.data.code==0){
            $scope.reqEdit = response.data.data;

        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    //编辑点击提交
    $scope.awardinfoEdit = function(){
          var data={
              awardTime:angular.element('.awardTime').val(),
              InfoId:$scope.reqEdit.id,
              getAward:$scope.reqEdit.getAward,
              awardAmount:$scope.reqEdit.awardAmount,
              id:$scope.reqEdit.awardInfoId
           }
        awardSer.awardEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.awardinfo.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





