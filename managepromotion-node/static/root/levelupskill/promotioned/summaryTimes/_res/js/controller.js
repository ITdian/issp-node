var app = angular.module('summaryTimes', ['toastr','angularjs-dropdown-multiselect']);
app.controller('summaryTimesCtrl', function($scope, promoedSer,toastr){
    


    $scope.collect = function(){
        var data=$scope;
        data.vm={
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val(),
        }
        promoedSer.promoedTimes(data.vm).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
});





