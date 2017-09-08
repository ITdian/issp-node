var app = angular.module('promoedServer',[]);
app.factory('promoedSer',function ($http) {
    return {
        promoedList : promoedList,
        promoedAdd:promoedAdd,
        promoedEdit:promoedEdit,
        promoedId:promoedId,
        promoedCount:promoedCount,
        promoedDelete:promoedDelete,
        promoedPermission:promoedPermission,
        promoedGetStatus:promoedGetStatus,
        promoedStatus:promoedStatus,
        promoedTimes:promoedTimes,
        promoedGetNames:promoedGetNames,
        promoedName:promoedName
    };
    function promoedList(data) {
        return $http.get('/promoedList/list',{
            params: data
        })
    }

    //添加
    function promoedAdd(data){
        return $http.post('/promoedAdd/add',data)
    }
    //编辑
    function promoedEdit(data){
        return $http.post('/promoedEdit/edit',data)
    }
    //id查询
    function promoedId(data){
        return $http.get('/promoedId/Id',{
            params:data
        })
    }
    //分页总条数
    function promoedCount(){
        return $http.get('/promoedCount/count')
    }
    //删除
    function promoedDelete(data){

        return $http.get('/promoedDelete/delete',{
            params: data

        })
    }
    //功能导航权限
    function promoedPermission(data){

        return $http.get('/promoedPermission/permission/'+data);
    }
    //---------------------
    //状态汇总
    function promoedStatus(data) {
        return $http.get('/promoedStatus/Status',{
            params: data
        });
        // return $http.get('/promoedStatus/Status?status='+data.join(','))
    }
    //获取状态
    function promoedGetStatus(){
        return $http.get('/promoedGetStatus/getStatus')
    }
    //名字汇总
    function promoedName(data) {
        return $http.get('/promoedName/name?name='+data.join(','))
    }
    //获取名字
    function promoedGetNames(){
        return $http.get('/promoedGetNames/getNames')
    }
    //时间
    function promoedTimes(data) {
        return $http.get('/promoedTimes/times',{
            params: data
        });
    }
    
});
