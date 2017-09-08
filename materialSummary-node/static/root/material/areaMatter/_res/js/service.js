var app = angular.module('areaMServer',[]);
app.factory('areaMSer',function ($http) {
    return {
        areaMaSummaryDay:areaMaSummaryDay,
        areaMaSummaryWeek:areaMaSummaryWeek,
        areaMaSummaryMonth:areaMaSummaryMonth,
        areaMaSummaryYear:areaMaSummaryYear,
        subsPermission:subsPermission
    };
    //菜单权限
    function subsPermission(data) {
        return $http.get('/subsPermission/subsPermission/'+data);
    }
    //日汇总
    function areaMaSummaryDay(data){
        return $http.get('/areaMaSummaryDay/summaryDay',{
            params:data
        })
    }
    //周汇总
    function areaMaSummaryWeek(data){
        return $http.get('/areaMaSummaryWeek/summaryWeek',{
            params:data
        })
    }
    //月汇总
    function areaMaSummaryMonth(data){

        return $http.get('/areaMaSummaryMonth/summaryMonth',{
            params:data
        })
    }
    //年汇总
    function areaMaSummaryYear(data){

        return $http.get('/areaMaSummaryYear/summaryYear',{
            params:data
        })
    }
});
