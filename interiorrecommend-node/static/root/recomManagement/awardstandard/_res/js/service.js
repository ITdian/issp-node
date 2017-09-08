var app = angular.module('standServer',[]);
app.factory('standSer',function ($http) {
    return {
        menuRepair : menuRepair,
        standList :standList ,
        addStand:addStand,
        editStand:editStand,
        findRepairId:findRepairId,
        countaward:countaward,
        standDelete:standDelete,
        recomList:recomList,
        quirefind:quirefind,
        infofind:infofind
    };
    //菜单权限
    function  menuRepair(data) {
        return $http.get('/awardstandard/guidePermission/'+data);
    }
    //列表
    function standList(data) {
        return $http.get('/awardstandard/pageList',{
            params:data
        })
    }
    //id查询find
    function findRepairId(data){
        return $http.get('/awardstandard/find/one',{
            params:data
        })
    }
    //查询所有推荐要求
    function infofind(data){
        return $http.get('recommendinfo/find/require',{
            params: data
        })
    }
   //推荐要求分页查询
    function recomList(data){
        return $http.get('/recommendrequire/list',{
            params:data

        })
    }
    //查询所有推荐类型
    function quirefind(data){
        return $http.get('/recommendrequire/find/recommendType',{
            params:data

        })
    }

    //添加
    function addStand(data){
        return $http.post('/awardstandard/add',data)
    }

    //编辑
    function editStand(data){
        return $http.post('/awardstandard/edit',data)
    }

    //分页总条数
    function countaward(){
        return $http.get('/awardstandard/count')
    }
    //删除
    function standDelete(data){
        return $http.get('/awardstandard/delete',{
            params: data
        })
    }
});

