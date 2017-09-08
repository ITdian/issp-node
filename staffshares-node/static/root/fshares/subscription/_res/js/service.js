var app = angular.module('subscripServer',[]);
app.factory('subscripSer',function ($http) {
    return {
        subscripList : subscripList,
        subscripEdit:subscripEdit,
        subscripAudit:subscripAudit,
        subscripFindId:subscripFindId,
        subscripCount:subscripCount,
        subscripDelete:subscripDelete,
        subscripPermission:subscripPermission
    };
    function subscripList(data) {
        return $http.get('/subscripList/list',{
            params: data

        })
    }

    //添加
    function addsubscrip(data){
        return $http.post('/biddingwebinfo/add',data)
    }
    //编辑
    function subscripEdit(data){
        return $http.post('/subscripEdit/edit',data)
    }
    //审核
    function subscripAudit(data){
        return $http.post('/subscripAudit/audit',data)
    }
    //id查询
    function subscripFindId(data){
        return $http.get('/subscripFindId/Id',{
            params:data
        })
    }
    //分页总条数
    function subscripCount(){
        return $http.get('/subscripCount/count')
    }
    //删除
    function subscripDelete(data){

        return $http.get('/subscripDelete/delete',{
            params: data

        })
    }
    //功能导航权限
    function subscripPermission(data){

        return $http.get('/subscripPermission/permission/'+data);
    }
});
