var app = angular.module('sourServer',[]);
app.factory('sourSer',function ($http) {
    return {
        sourSummaryDay:sourSummaryDay,
        sourSummaryWeek:sourSummaryWeek,
        sourSummaryMonth:sourSummaryMonth,
        sourSummaryYear:sourSummaryYear,
        subsPermission:subsPermission
    };
    //菜单权限
    function subsPermission(data) {
        return $http.get('/subsPermission/subsPermission/'+data);
    }
    //日汇总
    function sourSummaryDay(data){
        return $http.get('/sourSummaryDay/summaryDay',{
            params:data
        })
    }
    //周汇总
    function sourSummaryWeek(data){
        return $http.get('/sourSummaryWeek/summaryWeek',{
            params:data
        })
    }
    //月汇总
    function sourSummaryMonth(data){

        return $http.get('/sourSummaryMonth/summaryMonth',{
            params:data
        })
    }
    //年汇总
    function sourSummaryYear(data){

        return $http.get('/sourSummaryYear/summaryYear',{
            params:data
        })
    }
});
