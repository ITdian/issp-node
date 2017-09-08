var app = angular.module('projectServe',[]);
app.factory('projectSer',function ($http) {
    return {
        menuPermission:menuPermission,
        listData:listData,
        countBaseInfo1:countBaseInfo,
        addMarketserveapply1:addMarketserveapply,
        getOneById1:getOneById,
        gitfEdit:gitfEdit,
        marketserveapplyDel1:marketserveapplyDel,
        allFestivalList:allFestivalList,
        checkTimeList:checkTimeList,
        checkTimeCount:checkTimeCount,
        checkProList:checkProList,
        checkProCount:checkProCount,
        checkPeoList:checkPeoList,
        checkPeoCount:checkPeoCount,
        checkGiftList:checkGiftList,
        checkGiftCount:checkGiftCount,
        checkNoticeList:checkNoticeList,
        checkNoticeCount:checkNoticeCount
    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/project/guidePermission/'+data);
    }
    //列表
    function listData(data) {
        return $http.get('/legalholiday/project/list',{
            params:data
        })
    }
    //分页
    function countBaseInfo(){
        return $http.get('/legalholiday/project/count')
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/legalholiday/project/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/legalholiday/project/getOneById',data)
    }
    //编辑
    function gitfEdit(data){
        return $http.post('/legalholiday/project/edit',data)
    }
    //删除
    function marketserveapplyDel(data){
        return $http.post('/legalholiday/project/delete',data)
    }
    //获取所有节假日 
    function allFestivalList(){
        return $http.get('/legalholiday/allFestival/list')
    }
    //查看 列表
    function checkTimeList(data) {
        return $http.get('/legalholiday/checkTime/list',{
            params:data
        })
    }
    //分页
    function checkTimeCount(data){
        return $http.get('/legalholiday/checkTime/count',{
            params:data
        })
    }
    //查看 列表
    function checkProList(data) {
        return $http.get('/legalholiday/checkPro/list',{
            params:data
        })
    }
    //分页
    function checkProCount(data){
        return $http.get('/legalholiday/checkPro/count',{
            params:data
        })
    }
    //查看 列表
    function checkPeoList(data) {
        return $http.get('/legalholiday/checkPeo/list',{
            params:data
        })
    }
    //分页
    function checkPeoCount(data){
        return $http.get('/legalholiday/checkPeo/count',{
            params:data
        })
    }
    //查看 列表
    function checkGiftList(data) {
        return $http.get('/legalholiday/checkGift/list',{
            params:data
        })
    }
    //分页
    function checkGiftCount(data){
        return $http.get('/legalholiday/checkGift/count',{
            params:data
        })
    }
    //查看 列表
    function checkNoticeList(data) {
        return $http.get('/legalholiday/checkNotice/list',{
            params:data
        })
    }
    //分页
    function checkNoticeCount(data){
        return $http.get('/legalholiday/checkNotice/count',{
            params:data
        })
    }
});
