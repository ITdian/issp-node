var app = angular.module('partServer',[]);
app.factory('partSer',function ($http) {
    return {
        partList : partList,
        partEdit:partEdit,
        partFindId:partFindId,
        partCount:partCount,
        partPermission:partPermission
    };
    function partList(data) {
        return $http.get('/partList/list',{
            params: data

        })
    }
    //编辑
    function partEdit(data){
        return $http.post('/partEdit/edit',data)
    }
    //id查询
    function partFindId(data){
        return $http.get('/partFindId/Id',{
            params:data
        })
    }
    //分页总条数
    function partCount(){
        return $http.get('/partCount/count')
    }
    //功能导航权限
    function partPermission(data){

        return $http.get('/casePermission/permission/'+data);
    }
});
