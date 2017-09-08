var app = angular.module('levelServer',[]);
app.factory('levelSer',function ($http) {
    return {
        levelList : levelList,
        levelAdd:levelAdd,
        levelEdit:levelEdit,
        levelId:levelId,
        levelCount:levelCount,
        levelDelete:levelDelete,
        levelPermission:levelPermission
    };
    function levelList(data) {
        return $http.get('/levelList/list',{
            params: data

        })
    }

    //添加
    function levelAdd(data){
        return $http.post('/levelAdd/add',data)
    }
    //编辑
    function levelEdit(data){
        return $http.post('/levelEdit/edit',data)
    }
    //id查询
    function levelId(data){
        return $http.get('/levelId/Id',{
            params:data
        })
    }
    //分页总条数
    function levelCount(){
        return $http.get('/levelCount/count')
    }
    //删除
    function levelDelete(data){

        return $http.get('/levelDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function levelPermission(data){

        return $http.get('/levelPermission/permission/'+data);
    }
});
