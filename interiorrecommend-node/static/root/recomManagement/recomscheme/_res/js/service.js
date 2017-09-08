var app = angular.module('schemeServer',[]);
app.factory('schemeSer',function ($http) {
    return {
        menuRepair : menuRepair,
        SchemeList :SchemeList ,
        addScheme:addScheme,
        editScheme:editScheme,
        findRepairId:findRepairId,
        countScheme:countScheme,
        SchemeDelete:SchemeDelete,
        schemeoper:schemeoper,
        schemeAudit:schemeAudit,
        genAudit:genAudit,
        repairFetch:repairFetch,
        uploadFile:uploadFile,
        viewRepair:viewRepair
    };
    //菜单权限
    function  menuRepair(data) {
        return $http.get('/recommendscheme/guidePermission/'+data);
    }
    //列表
    function SchemeList(data) {
        return $http.get('/recommendscheme/list',{
            params: data
        })
    }

    //添加
    function addScheme(data){
        return $http.post('/recommendscheme/add',data)
    }

    //编辑
    function editScheme(data){
        return $http.post('/recommendscheme/edit',data)
    }
    //id查询find
    function findRepairId(data){
        return $http.get('/recommendscheme/find',{
            params:data
        })
    }
    //分页总条数
    function countScheme(data){
        return $http.get('/recommendscheme/count',{params:data})
    }
    //删除
    function SchemeDelete(data){
        return $http.get('/recommendscheme/delete',{
            params: data
        })
    }
    //综合资源部意见
    function  schemeoper(data){
        return $http.post('/recommendscheme/resourcesAudit ',data)
    }
    //运营商务部意见
    function schemeAudit(data){
        return $http.post('/recommendscheme/operateAudit',data)
    }
    //总经办意见
    function genAudit(data){
        return $http.post('/recommendscheme/generalAudit',data)
    }
    //取回设备
    function repairFetch(data){
        return $http.post('/devicerepair/fetchDevice',data)
    }
    //上传文件
    function uploadFile(data){
        return $http.post('/devicerepair/uploadFile',data)
    }
    //附件列表
    function viewRepair(data){
        return $http.get('/devicerepair/listFile',{params:data})
    }
});
