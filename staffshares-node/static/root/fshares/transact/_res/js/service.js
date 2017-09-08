var app = angular.module('tranServer',[]);
app.factory('tranSer',function ($http) {
    return {
        tranList : tranList,
        tranCount:tranCount,
        tranPermission:tranPermission
    };
    function tranList(data) {
        return $http.get('/tranList/list',{
            params: data
        })
    }
    //分页总条数(与出售记录表合用一个)
    function tranCount(){
        return $http.get('/soldCount/count')
    }
    //功能导航权限
    function tranPermission(data){
        return $http.get('/soldPermission/permission/'+data);
    }
});
