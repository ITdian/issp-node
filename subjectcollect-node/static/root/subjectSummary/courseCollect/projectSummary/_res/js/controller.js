var app = angular.module('projectNameSummary', ['toastr']);
app.controller('projectNameSummaryCtrl', function($scope, courseCollectSer,toastr){
$scope.months=['1','2','3','4','5','6','7','8','9','10','11','12']
    $scope.showed=true;
    // 获取项目名称
    courseCollectSer.subjectsName().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        } else if(response.data.code == 403){
            toastr.error("请登录用户", '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:$scope.monthsa,
            endTime:$scope.monthsb,
            projectName:vm.projectName
        };
        courseCollectSer.projectSummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




