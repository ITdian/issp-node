var app = angular.module('represServer',[]);
app.factory('represSer',function ($http) {
    return {
        represList : represList,
        represEdit:represEdit,
        represFindId:represFindId,
        represCount:represCount,
        represPermission:represPermission
    };
    function represList(data) {
        return $http.get('/represList/list',{
            params: data
        })
    }
    //申请
    function represEdit(data){
        return $http.post('/represEdit/add',data)
    }
    //id查询
    function represFindId(data){
        return $http.get('/represFindId/Id',{
            params:data
        })
    }
    //分页总条数
    function represCount(){
        return $http.get('/represCount/count')
    }
    //功能导航权限
    function represPermission(data){
        return $http.get('/represPermission/permission/'+data);
    }
});
