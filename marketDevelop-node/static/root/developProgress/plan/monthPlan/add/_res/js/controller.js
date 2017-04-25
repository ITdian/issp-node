var app = angular.module('monthPlanAdd', ['toastr']);
app.controller('monthPlanAddCtrl', function($scope, monthPlanSer,$state,toastr){

    monthPlanSer.getChoice().then(function(response){
       if(response.data.code==0){
           $scope.choiceGetYears = response.data.data
       } else if(response.data.code == 403){
           toastr.error("请登录用户", '温馨提示');
       }
    });

    //月计划添加
    $scope.monthPlanAddFun = function(){
        var vm = $scope;
        var data = vm.addMonth;
        // var data = {
        //     yearId : vm.choiceGetYears.yearId,
        //     yearNumber : vm.addYearNumber,
        //     month : vm.addMonth,
        //     quota : vm.addQuota,
        //     accounted : vm.addAccounted,
        //     courseAccounted : vm.addCourseAccounted,
        //     leastQuota : vm.addLeastQuota
        // };
        monthPlanSer.addMonthPlan(data).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.developProgress.plan.monthPlan.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

    // 遍历年份
    $scope.yearArr=[];
    for (var y = 1990; y <= 2999; y++) {
        $scope.yearArr.push(y);
    }

});




