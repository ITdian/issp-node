var app = angular.module('waterServer',[]);
app.factory('waterSer',function ($http) {
    return {
        waterEdit:waterEdit,
        waterFinancialEdit:waterFinancialEdit,
        waterVerifyEdit:waterVerifyEdit,
        waterName:waterName,
        waterAdd:waterAdd,
        waterId:waterId,
        waterCount:waterCount,
        waterSummary:waterSummary,
        waterList:waterList,
        waterDelete:waterDelete,
        moneyGroup:moneyGroup,
        rentArea:rentArea,
        rentFindArea:rentFindArea,
        waterPermission:waterPermission
    };
    //菜单权限
    function waterPermission(data) {
        return $http.get('/waterPermission/waterPermission/'+data);
    }
    //编辑员工住宿水电费
    function waterEdit(data){
        return $http.post('/waterEdit/edit',data)
    }
    //员工核实
    function waterVerifyEdit(data){
        return $http.post('/waterVerifyEdit/verifyEdit',data)
    }
    //运营财务部
    function waterFinancialEdit(data){
        return $http.post('/waterFinancialEdit/financialEdit',data)
    }
    //获取名字
    function  waterName(data) {
        return $http.get('/waterName/name',{
            params:data
        })
    }
    //添加员工住宿水电费
    function waterAdd(data){
        return $http.post('/waterAdd/add',data)
    }
    //一个员工水电费
    function  waterId(data) {
        return $http.get('/waterId/Id',{
            params:data
        })
    }
    //水电费总条数
    function  waterCount(data) {
        return $http.get('/waterCount/count',{
            params:data
        })
    }
    //汇总
    function waterSummary(data){
        return $http.get('/waterSummary/summary',{
            params:data
        })
    }
    //获取员工住宿水电费
    function  waterList(data) {
        return $http.get('/waterList/list',{
            params:data
        })
    }
    //删除员工住宿水电费
    function waterDelete(data){
        return $http.get('/waterDelete/delete',{
            params:data
        })
    }
    //项目组分析
    function moneyGroup(data){
       return $http.get('/moneyGroup/Group',data,{
            params:data
        })
    }
    //获取地区
    function rentArea(data){
        return $http.get('/rentArea/area',{
            params:data
        })
    }
    //获取列表地区
    function rentFindArea(data){
        return $http.get('/rentFindArea/findArea',{
            params:data
        })
    }
});
