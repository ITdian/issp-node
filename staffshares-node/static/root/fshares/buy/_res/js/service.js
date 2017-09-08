var app = angular.module('buyServer',[]);
app.factory('buySer',function ($http) {
    return {
        buyList : buyList,
        buyEdit:buyEdit,
        buyFindId:buyFindId,
        buyCount:buyCount,
        buySummary:buySummary,
        buyPermission:buyPermission
    };
    function buyList(data) {
        return $http.get('/buyList/list',{
            params: data
        })
    }
    function buySummary(data) {
        return $http.get('/buySummary/summary',{
            params: data
        })
    }
    //编辑
    function buyEdit(data){
        return $http.post('/buyEdit/edit',data)
    }
    //id查询
    function buyFindId(data){
        return $http.get('/buyFindId/Id',{
            params:data
        })
    }
    //分页总条数
    function buyCount(){
        return $http.get('/buyCount/count')
    }
    //功能导航权限
    function buyPermission(data){

        return $http.get('/buyPermission/permission/'+data);
    }
});
