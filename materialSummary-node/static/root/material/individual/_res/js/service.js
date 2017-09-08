var app = angular.module('indivServer',[]);
app.factory('indivSer',function ($http) {
    return {
        indivSummaryDay:indivSummaryDay,
        indivSummaryWeek:indivSummaryWeek,
        indivSummaryMonth:indivSummaryMonth,
        indivSummaryYear:indivSummaryYear,
        subsPermission:subsPermission
    };
    //菜单权限
    function subsPermission(data) {
        return $http.get('/subsPermission/subsPermission/'+data);
    }
    //日汇总
    function indivSummaryDay(data){
        return $http.get('/indivSummaryDay/summaryDay',{
            params:data
        })
    }
    //周汇总
    function indivSummaryWeek(data){
        return $http.get('/indivSummaryWeek/summaryWeek',{
            params:data
        })
    }
    //月汇总
    function indivSummaryMonth(data){

        return $http.get('/indivSummaryMonth/summaryMonth',{
            params:data
        })
    }
    //年汇总
    function indivSummaryYear(data){

        return $http.get('/indivSummaryYear/summaryYear',{
            params:data
        })
    }
});
