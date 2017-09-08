var app = angular.module('manageServer',[]);
app.factory('manageSer',function ($http) {
    return {
        manageList : manageList,
        manageAdd:manageAdd,
        manageEdit:manageEdit,
        findManageId:findManageId,
        manageCount:manageCount,
        manageDelete:manageDelete,
        manageDay:manageDay,
        manageThaw:manageThaw,
        manageCongeal:manageCongeal,
        annuTier:annuTier,
        managePermission:managePermission
    };
    function manageList(data) {
        return $http.get('/manageList/list',{
            params: data

        })
    }

    //添加
    function manageAdd(data){
        return $http.post('/manageAdd/add',data)
    }
    //编辑
    function manageEdit(data){
        return $http.post('/manageEdit/edit',data)
    }
    //层级放假天数管理
    function manageDay(data){
        return $http.post('/manageDay/day',data)
    }
    //id查询
    function findManageId(data){
        return $http.get('/findManageId/Id',{
            params:data
        })
    }
    //分页总条数
    function manageCount(){
        return $http.get('/manageCount/count')
    }
    //删除
    function manageDelete(data){

        return $http.get('/manageDelete/delete',{
            params: data

        })
    }
    //功能导航权限
    function managePermission(data){

        return $http.get('/managePermission/permission/'+data);
    }
    //解冻
    function manageThaw(data){
        return $http.get('/manageThaw/thaw',{
            params: data
        })
    }
//冻结
    function manageCongeal(data){
        return $http.get('/manageCongeal/congeal',{
            params: data
        })
    } 
    //获取岗位层级
    function annuTier(data){

        return $http.get('/annuTier/tier',{
            params: data

        })
    } 
});
