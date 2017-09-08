var app = angular.module('leadServer',[]);
app.factory('leadSer',function ($http) {
    return {
        leadList : leadList,
        leadAdd:leadAdd,
        leadEdit:leadEdit,
        findLeadId:findLeadId,
        leadCount:leadCount,
        leadDelete:leadDelete,
        leadPermission:leadPermission
        // leadUrl:leadUrl,
        // leadName:leadName
    };
    function leadList(data) {
        return $http.get('/leadList/list',{
            params: data

        })
    }

    //添加
    function leadAdd(data){
        return $http.post('/leadAdd/add',data)
    }
    //编辑
    function leadEdit(data){
        return $http.post('/leadEdit/edit',data)
    }
    //id查询
    function findLeadId(data){
        return $http.get('/findLeadId/Id',{
            params:data
        })
    }
    //分页总条数
    function leadCount(){
        return $http.get('/leadCount/count')
    }
    //删除
    function leadDelete(data){

        return $http.get('/leadDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function leadPermission(data){

        return $http.get('/leadPermission/permission/'+data);
    }
    // //获取网址
    // function leadUrl(data){

    //     return $http.get('/leadUrl/url',{
    //         params: data

    //     })
    // }
    // //获取网站名称
    // function leadName(data){

    //     return $http.get('/leadName/name',{
    //         params: data

    //     })
    // }
});
