var app = angular.module('companyServer',[]);
app.factory('companySer',function ($http) {
    return {
        companyList : companyList,
        companyCount:companyCount,
        companyPermission:companyPermission
    };
    function companyList(data) {
        return $http.get('/companyList/list',{
            params: data
        })
    }
    //分页总条数(共用？)
    function companyCount(){
        return $http.get('/partCount/count')
    }
    //功能导航权限
    function companyPermission(data){

        return $http.get('/casePermission/permission/'+data);
    }
});
