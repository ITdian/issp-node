var app = angular.module('rewardServer',[]);
app.factory('rewardSer',function ($http) {
    return {
        rewardAdd:rewardAdd,
findById:findById,        
        rewardAllReward:rewardAllReward,
        scoreSummary:scoreSummary,
save:save,
        rewardList : rewardList,
edit:edit,
        rewardCount:rewardCount,
        summary:summary,
Delete:Delete,
        findByFilter:findByFilter,
        numberSummary:numberSummary,
        rewardOneReward:rewardOneReward,
        bonusStart:bonusStart,      

//---------------------------------------------------
        moneyProject:moneyProject,
        moneyGroup:moneyGroup,
        rentArea:rentArea,
        rentName:rentName,
        rewardPermission:rewardPermission
    };
    //菜单权限
    function rewardPermission(data) {
        return $http.get('/rewardPermission/rewardPermission/'+data);
    }
     //获取奖励总条数
    function  rewardCount(data) {
        return $http.get('/rewardCount/count',{
            params:data
        })
    }
//根据id获取奖罚记录
    function  findById(data) {
        return $http.get('/findById/id',{
            params:data
        })
    }
//项目组奖励排名
    function  rewardAllReward(data) {
        return $http.get('/rewardAllReward/allReward',{
            params:data
        })
    }
//个人奖励排名
    function  rewardOneReward(data) {
        return $http.get('/rewardOneReward/oneReward',{
            params:data
        })
    }
//奖罚分数汇总
    function scoreSummary(data){
        return $http.get('/scoreSummary/score',{
            params:data
        })
    }
//保存
    function save(data){
        return $http.post('/save/save',data)
    }
//奖励列表
    function  rewardList(data) {
        return $http.get('/rewardList/list',{
            params:data
        })
    }
//修改
    function edit(data){
        return $http.post('/edit/edit',data)
    }
//奖励
    function rewardAdd(data){
        return $http.post('/rewardAdd/add',data)
    }
//奖罚明细汇总
    function summary(data){
        return $http.get('/summary/summary',{
            params:data
        })
    }
//删除
    function Delete(data){
        return $http.get('/Delete/delete',{
            params:data
        })
    }
//根据过滤条件查询奖罚记录
    function findByFilter(data){
        return $http.get('/findByFilter/filter',{
            params:data
        })
    }
//奖罚人数汇总
    function numberSummary(data){
        return $http.get('/numberSummary/number',{
            params:data
        })
    }
//查询启动状态绩效指标数据
    function  bonusStart(data) {
        return $http.get('/bonusStart/start',{
            params:data
        })
    }



    //---------------------------------------------------------------------------
    
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
    //获取姓名
    function rentName(data){
        return $http.get('/rentName/name',{
            params:data
        })
    }
});
