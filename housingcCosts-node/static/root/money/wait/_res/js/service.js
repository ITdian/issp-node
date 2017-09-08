var app = angular.module('waitServer',[]);
app.factory('waitSer',function ($http) {
    return {
        listWait : listWait,
        addWait:addWait,
        editWait:editWait,
        findWaitId:findWaitId,
        countWait:countWait,
        deleteWait:deleteWait,
        waitPermission:waitPermission,
        paymentWait:paymentWait,
        getYear:getYear,
        summaryArea:summaryArea,
        summaryAreaDetail:summaryAreaDetail,
        summaryProject:summaryProject,
        summaryProjectDetail:summaryProjectDetail,
        areaPaying:areaPaying,
        projectPaying:projectPaying
    };
    //菜单权限
    function waitPermission(data) {
        return $http.get('/waitPermission/waitPermission/'+data);
    }
    function listWait(data) {
        return $http.get('/listWait/list',{
            params: data
        })
    }
    //添加
    function addWait(data){
        return $http.post('/addWait/add',data)
    }
    //编辑
    function editWait(data){
        return $http.post('/editWait/edit',data)
    }
    //id查询
    function findWaitId(data){
        return $http.get('/findWaitId/info',{
            params:data
        })
    }
    //获取年份
    function getYear(data){
        return $http.get('/getYear/year',{
            params:data
        })
    }
    //分页总条数
    function countWait(data){
        return $http.get('/countWait/count',{params:data})
    }
    //删除
    function deleteWait(data){
        return $http.get('/deleteWait/delete',{
            params: data
        })
    }
    //付款
    function paymentWait(data){
        return $http.post('/paymentWait/payment',data)
    }
    //地区汇总
    function summaryArea(data) {
        return $http.get('/waitArea/collect',{params:data})
    }
    //地区详细汇总
    function summaryAreaDetail(data) {
        return $http.get('/waitAreaDetail/collect',{params:data})
    }
    //项目汇总
    function summaryProject(data) {
        return $http.get('/waitProject/collect',{params:data})
    }
    //项目详细汇总
    function summaryProjectDetail(data) {
        return $http.get('/waitProjectDetail/collect',{params:data})
    }
    //获取所有地区
    function areaPaying(){
        return $http.get('/areaWait/areas')
    }
    //获取所有项目
    function projectPaying(){
        return $http.get('/projectWait/projects')
    }
});
