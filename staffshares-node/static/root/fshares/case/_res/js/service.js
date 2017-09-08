var app = angular.module('caseServer',[]);
app.factory('caseSer',function ($http) {
    return {
        caseList : caseList,
        caseEdit:caseEdit,
        caseFindId:caseFindId,
        caseCount:caseCount,
        casePermission:casePermission,
    };
    function caseList(data) {
        return $http.get('/caseList/list',{
            params: data
        })
    }
    //分红
    function caseEdit(data){
        return $http.post('/caseEdit/edit',data)
    }
    //id查询
    function caseFindId(data){
        return $http.get('/caseFindId/Id',{
            params:data
        })
    }
    //分页总条数
    function caseCount(){
        return $http.get('/caseCount/count')
    }
    //功能导航权限
    function casePermission(data){
        return $http.get('/casePermission/permission/'+data);
    }
});
