var app = angular.module('festivaltimeAdd', ['toastr']);
app.controller('festivaltimeAddCtrl', function($scope, festivaltimeSer,$state,toastr){
    //添加
    $scope.AddFun = function(){
        $scope.data.companyStartTime = angular.element('.startTime').val();
        $scope.data.companyEndTime = angular.element('.endTime').val();
        $scope.data.takeTime = angular.element('.takeTime').val();
        $scope.data.offTime = angular.element('.offTime').val();
        var data = $scope.data;
        festivaltimeSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.legalholiday.holiday.festivaltime.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    };
});




