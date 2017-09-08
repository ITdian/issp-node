var app = angular.module('departServer',[]);
app.factory('departSer',function ($http) {
    return {
        departSummaryDay:departSummaryDay,
        departSummaryWeek:departSummaryWeek,
        departSummaryMonth:departSummaryMonth,
        departSummaryYear:departSummaryYear,
        subsPermission:subsPermission
    };
    //菜单权限
    function subsPermission(data) {
        return $http.get('/subsPermission/subsPermission/'+data);
    }
    //日汇总
    function departSummaryDay(data){
        return $http.get('/departSummaryDay/summaryDay',{
            params:data
        })
    }
    //周汇总
    function departSummaryWeek(data){
        return $http.get('/departSummaryWeek/summaryWeek',{
            params:data
        })
    }
    //月汇总
    function departSummaryMonth(data){

        return $http.get('/departSummaryMonth/summaryMonth',{
            params:data
        })
    }
    //年汇总
    function departSummaryYear(data){

        return $http.get('/departSummaryYear/summaryYear',{
            params:data
        })
    }
});
