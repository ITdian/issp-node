var app = angular.module('soldServer',[]);
app.factory('soldSer',function ($http) {
    return {
        soldList : soldList,
        soldFindId:soldFindId,
        soldCount:soldCount,
        soldSummary:soldSummary,
        soldPermission:soldPermission
    };
    function soldList(data) {
        return $http.get('/soldList/list',{
            params: data

        })
    }
    function soldSummary(data) {
        return $http.get('/soldSummary/summary',{
            params: data
        })
    }
    //id查询
    function soldFindId(data){
        return $http.get('/soldFindId/Id',{
            params:data
        })
    }
    //分页总条数
    function soldCount(){
        return $http.get('/soldCount/count')
    }
    //功能导航权限
    function soldPermission(data){

        return $http.get('/soldPermission/permission/'+data);
    }
});
