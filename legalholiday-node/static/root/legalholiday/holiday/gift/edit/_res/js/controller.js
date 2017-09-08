var app = angular.module('giftEdit', ['toastr']);
app.controller('giftEditCtrl', function($scope, giftSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    giftSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        var data = $scope.data;
        data.id = companyId.id;;
        giftSer.gitfEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.legalholiday.holiday.gift.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
    
});
   