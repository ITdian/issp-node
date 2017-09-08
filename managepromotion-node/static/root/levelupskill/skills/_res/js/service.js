var app = angular.module('skilServer',[]);
app.factory('skilSer',function ($http) {
    return {
        skilList : skilList,
        skilAdd:skilAdd,
        skilEdit:skilEdit,
        skilId:skilId,
        skilCount:skilCount,
        skilDelete:skilDelete,
        skilPermission:skilPermission
    };
    function skilList(data) {
        return $http.get('/skilList/list',{
            params: data

        })
    }

    //添加
    function skilAdd(data){
        return $http.post('/skilAdd/add',data)
    }
    //编辑
    function skilEdit(data){
        return $http.post('/skilEdit/edit',data)
    }
    //id查询
    function skilId(data){
        return $http.get('/skilId/Id',{
            params:data
        })
    }
    //分页总条数
    function skilCount(){
        return $http.get('/skilCount/count')
    }
    //删除
    function skilDelete(data){

        return $http.get('/skilDelete/delete',{
            params: data

        })
    }
    //功能导航权限
    function skilPermission(data){

        return $http.get('/skilPermission/permission/'+data);
    }
});
