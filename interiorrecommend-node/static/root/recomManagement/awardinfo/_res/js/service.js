var app = angular.module('awardinfoServer',[]);
app.factory('awardSer',function ($http) {
    return {
        menuPermission : menuPermission,
        awardList : awardList,
        awardEdit:awardEdit,
        findSigningId:findSigningId,
        countinfo:countinfo,
        findId:findId

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/awardinfo/guidePermission/'+data);
    }
    //推荐奖励信息列表
    function awardList(data) {
        return $http.get('/awardinfo/list',{
            params: data
        })
    }
    //根据id来查询单个数据
    function findId(data){
        return $http.get('/awardinfo/find/info',{
            params:data
        })
    }

    //编辑
    function awardEdit(data){
        return $http.post('/awardinfo/edit',data)
    }
    //id查询
    function findSigningId(data){
        return $http.get('/awardinfo/find',{
            params:data
        })
    }
    //分页总条数
    function countinfo(data){
        return $http.get('/awardinfo/count',{params:data})
    }

});

