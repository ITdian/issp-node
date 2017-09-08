var app = angular.module('areaServer',[]);
app.factory('areaSer',function ($http) {
    return {
        areaSummaryDay:areaSummaryDay,
        areaSummaryWeek:areaSummaryWeek,
        areaSummaryMonth:areaSummaryMonth,
        areaSummaryYear:areaSummaryYear,
        subsPermission:subsPermission
    };
    //菜单权限
    function subsPermission(data) {
        return $http.get('/subsPermission/subsPermission/'+data);
    }
    //日汇总
    function areaSummaryDay(data){
        return $http.get('/areaSummaryDay/summaryDay',{
            params:data
        })
    }
    //周汇总
    function areaSummaryWeek(data){
        return $http.get('/areaSummaryWeek/summaryWeek',{
            params:data
        })
    }
    //月汇总
    function areaSummaryMonth(data){
        return $http.get('/areaSummaryMonth/summaryMonth',{
            params:data
        })
    }
    //年汇总
    function areaSummaryYear(data){
        return $http.get('/areaSummaryYear/summaryYear',{
            params:data
        })
    }
});
