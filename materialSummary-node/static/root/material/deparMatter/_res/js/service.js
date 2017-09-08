var app = angular.module('punishServer',[]);
app.factory('punishSer',function ($http) {
    return {
        deparMatterCount:deparMatterCount,
findById:findById,
        deparMatterAllPush:deparMatterAllPush,
        deparMatterOnePush:deparMatterOnePush,
        scoreSummary:scoreSummary,
save:save,
        deparMatterList : deparMatterList,
edit:edit,
        deparMatterAdd:deparMatterAdd,
        summary:summary,
Delete:Delete,
        findByFilter:findByFilter,
        numberSummary:numberSummary,
        bonusStart:bonusStart,
//---------------------------------------------------
        moneyProject:moneyProject,
        moneyGroup:moneyGroup,
        rentArea:rentArea,
        rentName:rentName,
        punishPermission:punishPermission
    };
    //菜单权限
    function punishPermission(data) {
        return $http.get('/punishPermission/punishPermission/'+data);
    }
    //获取处罚总条数
    function  deparMatterCount(data) {
        return $http.get('/deparMatterCount/count',{
            params:data
        })
    }
//根据id获取奖罚记录
    function  findById(data) {
        return $http.get('/findById/id',{
            params:data
        })
    }
//项目组处罚排名
    function  deparMatterAllPush(data) {
        return $http.get('/deparMatterAllPush/allPush',{
            params:data
        })
    }
//个人处罚排名
    function  deparMatterOnePush(data) {
        return $http.get('/deparMatterOnePush/onePush',{
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
//处罚列表
    function  deparMatterList(data) {
        return $http.get('/deparMatterList/list',{
            params:data
        })
    }
//修改
    function edit(data){
        return $http.post('/edit/edit',data)
    }
//处罚
    function deparMatterAdd(data){
        return $http.post('/deparMatterAdd/add',data)
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
