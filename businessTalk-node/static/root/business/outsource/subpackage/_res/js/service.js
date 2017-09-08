var app = angular.module('subpackageSer',[]);
app.factory('subpackageSer',function ($http) {
    return {
        listMarketserve : listMarketserve,
        countBaseInfo:countBaseInfo,
        addMarketserveapply:addMarketserveapply,
        getOneById:getOneById,
        marketserveapplyEdit:marketserveapplyEdit,
        marketserveapplyDel:marketserveapplyDel,
        ssuiCollect:ssuiCollect,
        outDelfile:outDelfile,//删除文件夹
        outUpload:outUpload,//上传文件
        outCycle:outCycle,//设置汇总周期
        outProjects:outProjects,//内部项目名称列表
        outLead:outLead,//导入
        outExport:outExport,//导出
        outDownload:outDownload,//文件下载
        outFiles:outFiles,//文件附件列表
        ssuiGuide:ssuiGuide//功能导航权限
    };
    //列表
    function listMarketserve(data) {
        return $http.post('/business/outsource/list',data)
    }
    //分页
    function countBaseInfo(data){
        return $http.get('/business/outsource/count',{
            params:data
        })
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/business/outsource/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/business/outsource/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/business/outsource/edit',data)
    }
    //删除 
    function marketserveapplyDel(data){
        return $http.post('/business/outsource/delete',data)
    } 
     //列表
    function ssuiCollect(data) {
        return $http.post('/business/outsource/collect',data)
    }
    // --------------------------------------------
    //删除文件夹
    function outDelfile(data) {
        return $http.post('/outDelfile/delfile',data)
    }
    //上传文件
    function outUpload(data) {
        return $http.post('/outUpload/upload',data)
    }
    //设置汇总周期
    function outCycle(data) {
        return $http.get('/outCycle/cycle',{
            params:data
        })
    }
    //内部项目名称列表
    function outProjects(data) {
        return $http.get('/outProjects/projects')
    }
    //导入
    function outLead(data) {
        return $http.post('/outLead/lead',data)
    }
    //导出
    function outExport(data) {
        return $http.get('/outExport/export',{
            params:data
        })
    }
    //文件下载
    function outDownload(data) {
        return $http.get('/outDownload/download',{
            params:data
        })
    }
    //文件附件列表
    function outFiles(data) {
        return $http.get('/outFiles/files',{
            params:data
        })
    }
    //功能导航权限
    function ssuiGuide(data) {
         return $http.get('/guidePermission2/guide/'+data);
    }
});
