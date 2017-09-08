var app = angular.module('schmServer',[]);
app.factory('schmSer',function ($http) {
    return {
        schmList:schmList,
        schmAdd:schmAdd,
        schmEdit:schmEdit,
        schmFindId:schmFindId,
        schmCount:schmCount,
        schmDelete:schmDelete,
        schmPermission:schmPermission,
        schmIssue:schmIssue,
        schmExamine:schmExamine
    };
    function schmList(data) {
        return $http.get('/schmList/list',{
            params: data

        })
    }

    //添加
    function schmAdd(data){
        return $http.post('/schmAdd/add',data)
    }
    //编辑
    function schmEdit(data){
        return $http.post('/schmEdit/edit',data)
    }
    //id查询
    function schmFindId(data){
        return $http.get('/schmFindId/Id',{
            params:data
        })
    }
    //分页总条数
    function schmCount(){
        return $http.get('/schmCount/count')
    }
    //删除
    function schmDelete(data){

        return $http.get('/schmDelete/delete',{
            params: data

        })
    }
    //功能导航权限
    function schmPermission(data){

        return $http.get('/schmPermission/permission/'+data);
    }
    //发行
    function schmIssue(data){
        return $http.get('/schmIssue/issue',{
            params: data

        })
    }
    //审核
    function schmExamine(data){
        return $http.post('/schmExamine/examine',data)
    }
});
