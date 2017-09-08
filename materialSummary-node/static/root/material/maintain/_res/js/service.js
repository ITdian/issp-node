var app = angular.module('mainServer',[]);
app.factory('mainSer',function ($http) {
    return {
        mainSummaryDay:mainSummaryDay,
        mainSummaryWeek:mainSummaryWeek,
        mainSummaryMonth:mainSummaryMonth,
        mainSummaryYear:mainSummaryYear,
        subsPermission:subsPermission
    };
    //菜单权限
    function subsPermission(data) {
        return $http.get('/subsPermission/subsPermission/'+data);
    }
    //日汇总
    function mainSummaryDay(data){
        return $http.get('/mainSummaryDay/summaryDay',{
            params:data
        })
    }
    //周汇总
    function mainSummaryWeek(data){
        return $http.get('/mainSummaryWeek/summaryWeek',{
            params:data
        })
    }
    //月汇总
    function mainSummaryMonth(data){

        return $http.get('/mainSummaryMonth/summaryMonth',{
            params:data
        })
    }
    //年汇总
    function mainSummaryYear(data){

        return $http.get('/mainSummaryYear/summaryYear',{
            params:data
        })
    }
});
