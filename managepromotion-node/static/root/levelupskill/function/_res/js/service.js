var app = angular.module('functionServer',[]);
app.factory('functionSer',function ($http) {
    return {
        functionList : functionList,
        functionAdd:functionAdd,
        functionEdit:functionEdit,
        functionId:functionId,
        functionCount:functionCount,
        functionDelete:functionDelete,
        functionPermission:functionPermission
    };
    function functionList(data) {
        return $http.get('/functionList/list',{
            params: data

        })
    }

    //添加
    function functionAdd(data){
        return $http.post('/functionAdd/add',data)
    }
    //编辑
    function functionEdit(data){
        return $http.post('/functionEdit/edit',data)
    }
    //id查询
    function functionId(data){
        return $http.get('/functionId/Id',{
            params:data
        })
    }
    //分页总条数
    function functionCount(){
        return $http.get('/functionCount/count')
    }
    //删除
    function functionDelete(data){

        return $http.get('/functionDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function functionPermission(data){

        return $http.get('/functionPermission/permission/'+data);
    }
});
