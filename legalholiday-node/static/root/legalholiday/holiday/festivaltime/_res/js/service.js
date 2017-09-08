var app = angular.module('festivaltimeServe',[]);
app.factory('festivaltimeSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listMarketserve1:listMarketserve,
        countBaseInfo1:countBaseInfo,
        addMarketserveapply1:addMarketserveapply,
        getOneById1:getOneById,
        gitfEdit:gitfEdit,
        festivalDelete:festivalDelete
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/festivaltime/guidePermission/'+data);
    }
    //列表
    function listMarketserve(data) {
        return $http.get('/legalholiday/festivaltime/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/legalholiday/festivaltime/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/legalholiday/festivaltime/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/legalholiday/festivaltime/getOneById',data)
    }
    //编辑
    function gitfEdit(data){
        return $http.post('/legalholiday/festivaltime/edit',data)
    }
    //删除
    function festivalDelete(data){
        return $http.post('/legalholiday/festivaltime/delete',data)
    }
});
