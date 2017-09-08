var app = angular.module('subsServer',[]);
app.factory('subsSer',function ($http) {
    return {
        substanSummaryDay:substanSummaryDay,
        substanSummaryWeek:substanSummaryWeek,
        substanSummaryMonth:substanSummaryMonth,
        substanSummaryYear:substanSummaryYear,
        subsPermission:subsPermission
    };
    //菜单权限
    function subsPermission(data) {
        return $http.get('/subsPermission/subsPermission/'+data);
    }
    //日汇总
    function substanSummaryDay(data){
        return $http.get('/substanSummaryDay/summaryDay',{
            params:data
        })
    }
    //周汇总
    function substanSummaryWeek(data){
        return $http.get('/substanSummaryWeek/summaryWeek',{
            params:data
        })
    }
    //月汇总
    function substanSummaryMonth(data){

        return $http.get('/substanSummaryMonth/summaryMonth',{
            params:data
        })
    }
    //年汇总
    function substanSummaryYear(data){

        return $http.get('/substanSummaryYear/summaryYear',{
            params:data
        })
    }
});