var app = angular.module('giftServe',[]);
app.factory('giftSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listMarketserve1 : listMarketserve,
        countBaseInfo1:countBaseInfo,
        addMarketserveapply1:addMarketserveapply,
        getOneById1:getOneById,
        gitfEdit:gitfEdit,
        marketserveapplyDel1:marketserveapplyDel
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/gift/guidePermission/'+data);
    }
    //列表
    function listMarketserve(data) {
        return $http.get('/legalholiday/gift/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/legalholiday/gift/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/legalholiday/gift/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/legalholiday/gift/getOneById',data)
    }
    //编辑
    function gitfEdit(data){
        return $http.post('/legalholiday/gift/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/legalholiday/gift/delete',data)
    }
});
