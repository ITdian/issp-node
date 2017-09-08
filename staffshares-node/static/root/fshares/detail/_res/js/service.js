var app = angular.module('detailServer',[]);
app.factory('detailSer',function ($http) {
    return {
        detailList : detailList,
        detailCount:detailCount,
        detailSummary:detailSummary,
        detailPermission:detailPermission
    };
    function detailList(data) {
        return $http.get('/detailList/list',{
            params: data
        })
    }
    //分页总条数
    function detailCount(){
        return $http.get('/partCount/count')
    }
    //汇总
    function detailSummary(data) {
        return $http.get('/detailSummary/summary',{
            params: data
        })
    }
    //功能导航权限
    function detailPermission(data){
        return $http.get('/casePermission/permission/'+data);
    }
});
