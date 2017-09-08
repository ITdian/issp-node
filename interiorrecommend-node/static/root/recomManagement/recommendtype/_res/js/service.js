var app = angular.module('typeServer',[]);
app.factory('TypeSer',function ($http) {
    return {
        menuRepair : menuRepair,
        TypeList :TypeList ,
        addType:addType,
        editType:editType,
        findRepairId:findRepairId,
        TypeDelete:TypeDelete,
        countType:countType
    };
    //菜单权限
    function  menuRepair(data) {
        return $http.get('/recommendtype/guidePermission/'+data);
    }
    //列表
    function TypeList(data) {
        return $http.get('/recommendtype/list',{
            params: data
        })
    }
    //分页总条数
    function countType(data){
        return $http.get('/recommendtype/count',{params:data})
    }

    //添加
    function addType(data){
        return $http.post('/recommendtype/add',data)
    }

    //编辑
    function editType(data){
        return $http.post('/recommendtype/edit',data)
    }
    //id查询find
    function findRepairId(data){
        return $http.get('/recommendtype/find',{
            params:data
        })
    }
    //删除
    function TypeDelete(data){
        return $http.get('/recommendtype/delete',{
            params: data
        })
    }
});
