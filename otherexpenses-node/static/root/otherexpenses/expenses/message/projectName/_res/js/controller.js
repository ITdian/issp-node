var app = angular.module('projectName', ['ng-pagination','toastr']);
app.controller('projectNameCtrl',function($scope,currencySer,toastr) {//projectNameLists
    $scope.projectNameList = {};
    $scope.collectFun = function(){
        $scope.start = angular.element(".startTime").val();//开始时间
        $scope.end = angular.element(".endTime").val();//结束时间
        var projectNameData = {
            start:$scope.start || "",
            end:$scope.end || "",
            area:$scope.area || "",
            project:$scope.project || "",
            type:$scope.type || "",
            name:$scope.name || ""
        }
        currencySer.projectName(projectNameData).then(function(response){
            if(response.data.code==0){
                $scope.data = response.data.data;
            }else {
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    }
    
});
