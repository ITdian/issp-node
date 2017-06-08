var app = angular.module('confirmServer',[]);
app.factory('confirmSer',function ($http) {
    return {
        resultList : resultList,
        searchList : searchList,
        addResult:addResult,
        editResult:editResult,
        findResultId:findResultId,
        countResult:countResult,
        deleteResult:deleteResult,
        summaryList:summaryList,
        getArea:getArea
    };
    function resultList(data) {
        return $http.get('/problemhandlingresult/list',{
            params: data
        })
    }
    //搜索
    function searchList(data) {
        return $http.get('/problemhandlingresult/search',{
            params: data
        })
    }
    //添加
    function addResult(data){
        return $http.post('/problemhandlingresult/add',data)
    }
    //编辑
    function editResult(data){
        return $http.post('/problemhandlingresult/edit',data)
    }
    //id查询
    function findResultId(data){
        return $http.get('/problemhandlingresult/result',{
            params:data
        })
    }
    //分页总条数
    function countResult(data){
        return $http.get('/problemhandlingresult/count',{params:data})
    }
    //删除
    function deleteResult(data){

        return $http.get('/problemhandlingresult/delete',{
            params: data

        })
    }
    //汇总
    function summaryList(data) {
        return $http.get('/problemhandlingresult/collect?areas='+data.join(','))
    }
    //获取所有地区
    function getArea(){
        return $http.get('/problemhandlingresult/area')
    }
});
