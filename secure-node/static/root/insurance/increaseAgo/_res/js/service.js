var app = angular.module('increAgoServer',[]);
app.factory('increAgoSer',function ($http) {
    return {
        increAgoList : increAgoList,
        increAgoAdd:increAgoAdd,
        increAgoEdit:increAgoEdit,
        increAgoId:increAgoId,
        increAgoCount:increAgoCount,
        increAgoDelete:increAgoDelete,
        increAgoPermission:increAgoPermission,
        getCompany:getCompany,

        //-----------------
        increPass:increPass,
        increNotPass:increNotPass,
        increComplete:increComplete
    };
    function increAgoList(data) {
        return $http.get('/increAgoList/list',{
            params: data

        })
    }

    //添加
    function increAgoAdd(data){
        return $http.post('/increAgoAdd/add',data)
    }
    //编辑
    function increAgoEdit(data){
        return $http.post('/increAgoEdit/edit',data)
    }
    //id查询
    function increAgoId(data){
        return $http.get('/increAgoId/Id',{
            params:data
        })
    }
    //分页总条数
    function increAgoCount(){
        return $http.get('/increAgoCount/count')
    }
    //删除
    function increAgoDelete(data){

        return $http.get('/increAgoDelete/delete',{
            params: data

        })
    }
    //功能导航权限
    function increAgoPermission(data){

        return $http.get('/increAgoPermission/permission/'+data);
    }

    //----------------------------
     //审核通过
    function increPass(data){

        return $http.get('/increPass/pass',{
            params: data

        })
    }
    //审核不通过
    function increNotPass(data){

        return $http.get('/increNotPass/notpass',{
            params: data

        })
    }
    //补全
    function increComplete(data){
        return $http.post('/increComplete/complete',data)
    }
    //获取公司名称
    function getCompany(data){

        return $http.get('/getCompany/company',{
            params: data

        })
    }
});
