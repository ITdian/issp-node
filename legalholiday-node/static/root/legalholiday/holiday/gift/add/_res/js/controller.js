var app = angular.module('giftAdd', ['toastr']);
app.controller('giftAddCtrl', function($scope, giftSer,$state,toastr){
    //添加
    $scope.AddFun = function(){
        $scope.data.startTime = angular.element('.startTiming').val();//计划时间
        var data = $scope.data;
        giftSer.addMarketserveapply1(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.legalholiday.holiday.gift.list[12]');
                toastr.success( "已成功添加", '温馨提示');
           }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    };
});




