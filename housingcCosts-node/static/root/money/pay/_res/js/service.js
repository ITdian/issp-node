var app = angular.module('paingServer',[]);
app.factory('paingSer',function ($http) {
    return {
        listPaying : listPaying,
        addPaying:addPaying,
        editPaying:editPaying,
        findPayingId:findPayingId,
        countPaying:countPaying,
        deletePaying:deletePaying,
        payingPermission:payingPermission,
        summaryArea:summaryArea,
        summaryAreaDetail:summaryAreaDetail,
        summaryProject:summaryProject,
        summaryProjectDetail:summaryProjectDetail,
        areaPaying:areaPaying,
        projectPaying:projectPaying

        
    };
    //菜单权限
    function payingPermission(data) {
        return $http.get('/payingPermission/payingPermission/'+data);
    }
    function listPaying(data) {
        return $http.get('/listPaying/list',{
            params: data
        })
    }
    //添加
    function addPaying(data){
        return $http.post('/addPaying/add',data)
    }
    //编辑
    function editPaying(data){
        return $http.post('/editPaying/edit',data)
    }
    //id查询
    function findPayingId(data){
        return $http.get('/findPayingId/info',{
            params:data
        })
    }
    //分页总条数
    function countPaying(data){
        return $http.get('/countPaying/count',{params:data})
    }
    //删除
    function deletePaying(data){
        return $http.get('/deletePaying/delete',{
            params: data
        })
    }
    //地区汇总
    function summaryArea(data) {
        return $http.get('/summaryArea/collect',{params:data})
    }
    //地区详细汇总
    function summaryAreaDetail(data) {
        return $http.get('/summaryAreaDetail/collect',{params:data})
    }
    //项目汇总
    function summaryProject(data) {
        return $http.get('/summaryProject/collect',{params:data})
    }
    //项目详细汇总
    function summaryProjectDetail(data) {
        return $http.get('/summaryProjectDetail/collect',{params:data})
    }
    //获取所有地区
    function areaPaying(){
        return $http.get('/areaPaying/areas')
    }
    //获取所有项目
    function projectPaying(){
        return $http.get('/projectPaying/projects')
    }
});
