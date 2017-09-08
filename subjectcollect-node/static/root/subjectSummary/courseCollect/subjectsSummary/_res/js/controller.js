var app = angular.module('subjectsSummary', ['toastr']);
app.controller('subjectsSummaryCtrl', function($scope, courseCollectSer,toastr){
$scope.months=['1','2','3','4','5','6','7','8','9','10','11','12']
    $scope.showed=true
    courseCollectSer.subjectsOne().then(function(response){
        if(response.data.code == 0){
            $scope.firstLevel = response.data.data;
            
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:$scope.monthsa,
            endTime:$scope.monthsb,
            firstSubject:vm.firstSubject
        };
        courseCollectSer.subjectSummary(vm.sum).then(function(response){

            if(response.data.code == 0){
                
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




