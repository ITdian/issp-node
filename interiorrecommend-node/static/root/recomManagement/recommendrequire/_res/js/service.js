var app = angular.module('typeServer',[]);
app.factory('requireSer',function ($http) {
    return {
        menuRepair : menuRepair,
        requireList :requireList ,
        addRequire:addRequire,
        editrequire:editrequire,
        findRepairId:findRepairId,
        countRequire:countRequire,
        requireDelete:requireDelete,
        requireType:requireType,
        schemefind:schemefind,
        requireScheme:requireScheme,
        typelist:typelist,
        schemelist:schemelist,
        findAssess:findAssess
    };
    //菜单权限
    function  menuRepair(data) {
        return $http.get('/recommendrequire/guidePermission/'+data);
    }
    //列表
    function requireList(data) {
        return $http.get('/recommendrequire/list',{
            params: data
        })
    }
    //查询所有推荐方案
    function requireScheme(data){
        return $http.get('/recommendrequire/find/recommendScheme',{
            params: data
        })
    }
    //查询所有推荐类型
    function requireType(data){
        return $http.get('/recommendrequire/find/recommendType',{
            params: data
        })
    }
   //根据id查询推荐方案
    function schemefind(data){
        return $http.get('/recommendscheme/find',{
            params:data
        })
    }

    //推荐方案类型表
    function typelist(data){
        return $http.get('/recommendtype/list',{
            params:data
        })
    }
    //推荐方案表
    function schemelist(data){
        return $http.get('/recommendscheme/list',{
            params:data
        })
    }
    //查询所有推荐内容
    function findAssess(data){
        return $http.get('/recommendrequire/find/assess',{
            params:data
        })
    }


    //添加
    function addRequire(data){
        return $http.post('/recommendrequire/add',data)
    }

    //编辑
    function editrequire(data){
        return $http.post('/recommendrequire/edit',data)
    }
    //id查询find
    function findRepairId(data){
        return $http.get('/recommendrequire/find',{
            params:data
        })
    }
    //分页总条数
    function countRequire(data){
        return $http.get('/recommendrequire/count',{params:data})
    }
    //删除
    function requireDelete(data){
        return $http.get('/recommendrequire/delete',{
            params: data
        })
    }
});
