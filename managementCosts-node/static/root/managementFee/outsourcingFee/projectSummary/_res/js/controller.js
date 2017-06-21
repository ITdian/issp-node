var app = angular.module('projectNameSummary', ['toastr']);
app.controller('projectNameSummaryCtrl', function($scope, outsourcingSer,toastr){

    $scope.showed=true;
    // 获取项目名称
    outsourcingSer.getOutProject().then(function(response){
        if(response.data.code == 0){
            $scope.names = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            startTime:angular.element('.start').val(),
            endTime:angular.element('.end').val(),
            project:vm.project
        };
        outsourcingSer.projectSummary(vm.sum).then(function(response){
            if(response.data.code == 0){
                if( vm.sum.project == undefined || vm.sum.project == ''){
                    $scope.showed=true
                }else {
                    $scope.showed=false
                }
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




