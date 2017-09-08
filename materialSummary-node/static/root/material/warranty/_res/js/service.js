var app = angular.module('warServer',[]);
app.factory('warSer',function ($http) {
    return {
        warSummaryDay:warSummaryDay,
        warSummaryWeek:warSummaryWeek,
        warSummaryMonth:warSummaryMonth,
        warSummaryYear:warSummaryYear,
        subsPermission:subsPermission
    };
    //菜单权限
    function subsPermission(data) {
        return $http.get('/subsPermission/subsPermission/'+data);
    }
    //日汇总
    function warSummaryDay(data){
        return $http.get('/warSummaryDay/summaryDay',{
            params:data
        })
    }
    //周汇总
    function warSummaryWeek(data){
        return $http.get('/warSummaryWeek/summaryWeek',{
            params:data
        })
    }
    //月汇总
    function warSummaryMonth(data){

        return $http.get('/warSummaryMonth/summaryMonth',{
            params:data
        })
    }
    //年汇总
    function warSummaryYear(data){

        return $http.get('/warSummaryYear/summaryYear',{
            params:data
        })
    }
});
