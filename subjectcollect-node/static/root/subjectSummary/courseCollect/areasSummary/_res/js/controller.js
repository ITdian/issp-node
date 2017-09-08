var app = angular.module('areasSummary', ['toastr']);
app.controller('areasSummaryCtrl', function($scope, courseCollectSer,toastr){
$scope.months=['1','2','3','4','5','6','7','8','9','10','11','12']
    $scope.showed=true;
    // 获取所有地区
    courseCollectSer.subjectsAreaAll().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:$scope.monthsa,
            endTime:$scope.monthsb,
            area:vm.area
        };
        courseCollectSer.areasSummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




