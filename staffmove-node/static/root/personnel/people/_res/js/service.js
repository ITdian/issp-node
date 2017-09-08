var app = angular.module('peopleServer',[]);
app.factory('peopleSer',function ($http) {
    return {
        popAdd:popAdd,
        popList:popList,
        popEdit:popEdit,
        popAuditS:popAuditS,
        popAuditG:popAuditG,
        popAuditD:popAuditD,
        popAuditY:popAuditY,
        popAuditZ:popAuditZ,
        popCount:popCount,
        popId:popId,
        popDelete:popDelete,
        popPermission:popPermission
    };
    //菜单权限
    function popPermission(data) {
        return $http.get('/popPermission/popPermission/'+data);
    }
    function popList(data) {
        return $http.get('/popList/list',{
            params: data

        })
    }

    //添加
    function popAdd(data){
        return $http.post('/popAdd/add',data)
    }
    //编辑
    function popEdit(data){
        return $http.post('/popEdit/edit',data)
    }
    //审核
    function popAuditS(data){
        return $http.post('/popAuditS/auditS',data)
    }
    //审核
    function popAuditG(data){
        return $http.post('/popAuditG/auditG',data)
    }
    //审核
    function popAuditD(data){
        return $http.post('/popAuditD/auditD',data)
    }
    //审核
    function popAuditY(data){
        return $http.post('/popAuditY/auditY',data)
    }
    //审核
    function popAuditZ(data){
        return $http.post('/popAuditZ/auditZ',data)
    }
    //id查询
    function popId(data){
        return $http.get('/popId/answer',{
            params:data
        })
    }
    //分页总条数
    function popCount(){
        return $http.get('/popCount/count')
    }
    //删除
    function popDelete(data){
        return $http.get('/popDelete/delete',{
            params: data

        })
    }
});
