var app = angular.module('ssuiSer',[]);
app.factory('ssuiSer',function ($http) {
    return {
        listMarketserve:listMarketserve,
        countBaseInfo:countBaseInfo,
        addMarketserveapply:addMarketserveapply,
        getOneById:getOneById,
        marketserveapplyEdit:marketserveapplyEdit,
        marketserveapplyDel:marketserveapplyDel,
        ssuiCollect:ssuiCollect,
        ssuiDelfile:ssuiDelfile,//删除文件夹
        ssuiUpload:ssuiUpload,//上传文件
        ssuiCycle:ssuiCycle,//设置汇总周期
        ssuiProjects:ssuiProjects,//内部项目名称列表
        ssuiLead:ssuiLead,//导入
        ssuiExport:ssuiExport,//导出
        ssuiDownload:ssuiDownload,//文件下载
        ssuiFiles:ssuiFiles,//文件附件列表
        ssuiGuide:ssuiGuide//功能导航权限
    };
    //列表
    function listMarketserve(data) {
        return $http.post('/business/contract/list',data)
    }
    //分页
    function countBaseInfo(data){
        return $http.get('/business/contract/count',{
            params:data
        })
    }
    //添加
    function addMarketserveapply(data){
        return $http.post('/business/ssui/add',data)
    }
    //id编辑
    function getOneById(data) {
        return $http.post('/business/ssui/getOneById',data)
    }
    //编辑
    function marketserveapplyEdit(data){
        return $http.post('/business/ssui/edit',data)
    }
    //删除 
    function marketserveapplyDel(data){
        return $http.post('/business/ssui/delete',data)
    } 
     //汇总
    function ssuiCollect(data) {
        return $http.post('/business/contract/collect',data)
    }

    // --------------------------------------------
     //删除文件夹
    function ssuiDelfile(data) {
        return $http.post('/ssuiDelfile/delfile',data)
    }
    //上传文件
    function ssuiUpload(data) {
        return $http.post('/ssuiUpload/upload',data)
    }
    //设置汇总周期
    function ssuiCycle(data) {
        return $http.get('/ssuiCycle/cycle',{
            params:data
        })
    }
    //内部项目名称列表
    function ssuiProjects(data) {
        return $http.get('/ssuiProjects/projects')
    }
    //导入
    function ssuiLead(data) {
        return $http.post('/ssuiLead/lead',data)
    }
    //导出
    function ssuiExport(data) {
        return $http.get('/ssuiExport/export',{
            params:data
        })
    }
    //文件下载
    function ssuiDownload(data) {
        return $http.get('/ssuiDownload/download',{
            params:data
        })
    }
    //文件附件列表
    function ssuiFiles(data) {
        return $http.get('/ssuiFiles/files',{
            params:data
        })
    }
    //功能导航权限
    function ssuiGuide(data) {
         return $http.get('/guidePermission1/guide/'+data);
    }
   
});
