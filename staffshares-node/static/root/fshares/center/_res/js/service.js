var app = angular.module('centeServer',[]);
app.factory('centeSer',function ($http) {
    return {
        centeList : centeList,
        centeListId : centeListId,
        centeApply:centeApply,
        centeBuy:centeBuy,
        centeSold:centeSold,
        centeFindId:centeFindId,
        centeCount:centeCount,
        centeCountId:centeCountId,
        centeDelete:centeDelete,
        centePermission:centePermission
    };
    function centeList(data) {
        return $http.get('/centeList/list',{
            params: data
        })
    }
    //交易详情
    function centeListId(data) {
        return $http.get('/centeListId/list',{
            params: data
        })
    }
    //申请购买
    function centeApply(data){
        return $http.post('/centeApply/apply',data)
    }
    //购买
    function centeBuy(data){
        return $http.post('/centeBuy/buy',data)
    }
    //出售
    function centeSold(data){
        return $http.post('/centeSold/sold',data)
    }
    //id查询
    function centeFindId(data){
        return $http.get('/centeFindId/Id',{
            params:data
        })
    }
    //分页总条数
    function centeCount(){
        return $http.get('/centeCount/count')
    }
    //详情分页总条数
    function centeCountId(){
        return $http.get('/centeCountId/count')
    }
    //回收
    function centeDelete(data){
        return $http.get('/centeDelete/delete',{
            params: data

        })
    }
    //功能导航权限
    function centePermission(data){
        return $http.get('/centePermission/permission/'+data);
    }
});
