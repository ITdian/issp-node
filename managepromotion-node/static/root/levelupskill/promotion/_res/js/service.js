var app = angular.module('promoServer',[]);
app.factory('promoSer',function ($http) {
    return {
        promoList : promoList,
        promoAdd:promoAdd,
        promoId:promoId,
        promoCount:promoCount,
        promoPermission:promoPermission,
        //-----------------------------
        promoComprehensive:promoComprehensive,
        promoHead:promoHead,
        promoBudget:promoBudget,
        promoManager:promoManager,
        promoPlanning:promoPlanning,
        promoGeneral:promoGeneral
    };
    function promoList(data) {
        return $http.get('/promoList/list',{
            params: data

        })
    }

    //添加
    function promoAdd(data){
        return $http.post('/promoAdd/add',data)
    }
    
    //id查询
    function promoId(data){
        return $http.get('/promoId/Id',{
            params:data
        })
    }
    //分页总条数
    function promoCount(){
        return $http.get('/promoCount/count')
    }
    //功能导航权限
    function promoPermission(data){

        return $http.get('/promoPermission/permission/'+data);
    }
    //-------------------------------
    //综合素养补充
    function promoComprehensive(data){
        return $http.post('/promoComprehensive/comprehensive',data)
    }
    //负责人审核
    function promoHead(data){
        return $http.post('/promoHead/head',data)
    }
    //预算审核
    function promoBudget(data){
        return $http.post('/promoBudget/budget',data)
    }
    //项目经理审核
    function promoManager(data){
        return $http.post('/promoManager/manager',data)
    }
    //规划模块审核
    function promoPlanning(data){
        return $http.post('/promoPlanning/planning',data)
    }
    //总经办审核
    function promoGeneral(data){
        return $http.post('/promoGeneral/general',data)
    }
});
