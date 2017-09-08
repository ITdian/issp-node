var app = angular.module('festivaltimeEdit', ['toastr']);
app.controller('festivaltimeEditCtrl', function($scope, festivaltimeSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    festivaltimeSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        $scope.data.companyStartTime = angular.element('.startTime').val();
        $scope.data.companyEndTime = angular.element('.endTime').val();
        $scope.data.takeTime = angular.element('.takeTime').val();
        $scope.data.offTime = angular.element('.offTime').val();
        var data = $scope.data;
        data.id = companyId.id;
        festivaltimeSer.gitfEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.legalholiday.holiday.festivaltime.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
    
});
   