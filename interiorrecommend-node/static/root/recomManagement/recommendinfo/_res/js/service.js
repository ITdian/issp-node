var app = angular.module('infoServer',[]);
app.factory('infoSer',function ($http) {
    return {
        menuPermission : menuPermission,
        infoLists : infoLists,
        addinfo:addinfo,
        infoEdit:infoEdit,
        infoDelete:infoDelete,
        auditinfo:auditinfo,
        infofind:infofind,
        acceptinfo:acceptinfo,
        quireCon:quireCon,
        findAssess:findAssess,
        findinfoId:findinfoId,
        infoCount:infoCount

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/recommendinfo/guidePermission/'+data);
    }
    //列表
    function infoLists(data) {
        return $http.get('/recommendinfo/list',{
            params: data
        })
    }
    //查询所有推荐内容
    function findAssess(data){
        return $http.get('/recommendrequire/find/assess',{
            params:data
        })
    }



    //查询所有推荐要求
    function infofind(data){
        return $http.get('recommendinfo/find/require',{
            params: data
        })
    }
    ////查询所有推荐内容
    function quireCon(data){
        return $http.get('recommendrequire/find/content',{
            params: data
        })
    }
    //id查询find
    function findinfoId(data){
        return $http.get('/recommendinfo/find/one',{
            params:data
        })
    }

    //添加
    function addinfo(data){
        return $http.post('/recommendinfo/add',data)
    }

    //编辑
    function infoEdit(data){
        return $http.post('/recommendinfo/edit',data)
    }

    //删除
    function infoDelete(data){
        return $http.get('/recommendinfo/delete',{
            params: data
        })
    }
    //审核
    function auditinfo(data){
        return $http.get('/recommendinfo/audit',{params:data})
    }


    function acceptinfo(data){
        return $http.get('/recommendinfo/acceptAudit',{params:data})
    }
   //分页总条数
    function infoCount(data){
        return $http.get('/recommendinfo/count',{
            params:data

        })
    }
});



