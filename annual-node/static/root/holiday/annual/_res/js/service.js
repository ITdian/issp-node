var app = angular.module('annuServer',[]);
app.factory('annuSer',function ($http) {
    return {
        annuList : annuList,
        annuMine:annuMine,
        annuAdd:annuAdd,
        annuEdit:annuEdit,
        findAnnuId:findAnnuId,
        annuCount:annuCount,
        annuDelete:annuDelete,
        annuPermission:annuPermission,
        annuName:annuName,
        annuArea:annuArea,
        annuJobs:annuJobs,
        annuProject:annuProject,
        annuTier:annuTier,
        annuLook:annuLook
        // annuName:annuName
    };
    function annuList(data) {
        return $http.get('/annuList/list',{
            params: data

        })
    }
    function annuMine(data) {
        return $http.get('/annuMine/mine',{
            params: data

        })
    }
    //查看年假申请记录
    function annuLook(data) {
        return $http.get('/annuLook/look',{
            params: data

        })
    }
    //添加
    function annuAdd(data){
        return $http.post('/annuAdd/add',data)
    }
    //编辑
    function annuEdit(data){
        return $http.post('/annuEdit/edit',data)
    }
    //id查询
    function findAnnuId(data){
        return $http.get('/findAnnuId/Id',{
            params:data
        })
    }
    //分页总条数
    function annuCount(){
        return $http.get('/annuCount/count')
    }
    //删除
    function annuDelete(data){

        return $http.get('/annuDelete/delete',{
            params: data

        })
    }
    //功能导航权限
    function annuPermission(data){

        return $http.get('/annuPermission/permission/'+data);
    }
    //获取姓名
    function annuName(data){

        return $http.get('/annuName/name',{
            params: data

        })
    }
    //获取地区
    function annuArea(data){

        return $http.get('/annuArea/area',{
            params: data

        })
    }
    //获取岗位
    function annuJobs(data){

        return $http.get('/annuJobs/jobs',{
            params: data

        })
    }
    //获取项目组/部门
    function annuProject(data){

        return $http.get('/annuProject/project',{
            params: data

        })
    }
    //获取岗位层级
    function annuTier(data){

        return $http.get('/annuTier/tier',{
            params: data

        })
    }
});
