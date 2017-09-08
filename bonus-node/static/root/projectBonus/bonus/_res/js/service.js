var app = angular.module('bonuServer',[]);
app.factory('bonuSer',function ($http) {
    return {
        bonusStart:bonusStart,
        bonusId:bonusId,
        bonusList : bonusList,
        bonusAdd:bonusAdd,
        bonusEdit:bonusEdit,
        bonusStatus:bonusStatus,
        bonusThaw:bonusThaw,//启动
        bonusCount:bonusCount,
        bonusDelete:bonusDelete,        
        bonusFreeze:bonusFreeze,//关闭      


        moneyProject:moneyProject,
        moneyGroup:moneyGroup,
        rentArea:rentArea,
        bonuPermission:bonuPermission
    };
    //菜单权限
    function bonuPermission(data) {
        return $http.get('/bonuPermission/bonuPermission/'+data);
    }
    //查询启动状态绩效指标数据
    function  bonusStart(data) {
        return $http.get('/bonusStart/start',{
            params:data
        })
    }
    //根据\id获取绩效指标数据
    function  bonusId(data) {
        return $http.get('/bonusId/id',{
            params:data
        })
    }
    //列表
    function  bonusList(data) {
        return $http.get('/bonusList/list',{
            params:data
        })
    }
    //添加
    function bonusAdd(data){
        return $http.post('/bonusAdd/add',data)
    }
    //编辑
    function bonusEdit(data){
        return $http.post('/bonusEdit/edit',data)
    }
    //根据指标状态查询绩效指标数据
    function  bonusStatus(data) {
        return $http.get('/bonusStatus/status',{
            params:data
        })
    }
    //启动
    function bonusThaw(data){
        return $http.post('/bonusThaw/thaw',data)
    }
    //总条数
    function  bonusCount(data) {
        return $http.get('/bonusCount/count',{
            params:data
        })
    }
    //删除
    function bonusDelete(data){
        return $http.get('/bonusDelete/delete',{
            params:data
        })
    }
    //关闭
    function bonusFreeze(data){
        return $http.post('/bonusFreeze/freeze',data)
    }

 //-----------------引入（不知是否可用）------------------------------------------------
    
    
    //项目分析
    function moneyProject(data){
       return $http.post('/moneyProject/Project',data)
    }
    //项目组分析
    function moneyGroup(data){
       return $http.post('/moneyGroup/Group',data)
    }
    //获取地区
    function rentArea(data){
        return $http.get('/rentArea/area',{
            params:data
        })
    }
});
