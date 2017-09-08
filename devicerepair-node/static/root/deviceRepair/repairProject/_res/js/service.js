var app = angular.module('repairServer',[]);
app.factory('repairSer',function ($http) {
    return {
        menuRepair : menuRepair,
        repairList :repairList ,
        addRepair:addRepair,
        editRepair:editRepair,
        findRepairId:findRepairId,
        countRepair:countRepair,
        repairDelete:repairDelete,
        getNumber:getNumber,
        getAllArea:getAllArea,
        getAllOrage:getAllOrage,
        getAllGetPerson:getAllGetPerson,
        welfareRepair:welfareRepair,
        auditRepair:auditRepair,
        repairScrap:repairScrap,
        repairFetch:repairFetch,
        uploadFile:uploadFile,
        viewRepair:viewRepair
    };
    //菜单权限
    function  menuRepair(data) {
        return $http.get('/devicerepair/guidePermission/'+data);
    }
    //列表
    function repairList(data) {
        return $http.get('/devicerepair/list',{
            params: data
        })
    }

    //添加
    function addRepair(data){
        return $http.post('/devicerepair/add',data)
    }

    //编辑
    function editRepair(data){
        return $http.post('/devicerepair/edit',data)
    }
    //id查询
    function findRepairId(data){
        return $http.get('/devicerepair/devicerepair',{
            params:data
        })
    }
    //分页总条数
    function countRepair(data){
        return $http.get('/devicerepair/count',{params:data})
    }
    //删除
    function repairDelete(data){
        return $http.get('/devicerepair/delete',{
            params: data
        })
    }

    //获取所有入库编号
    function getNumber(){
        return $http.get('/devicerepair/allGetNo')
    }
    //获取添加中的所有地区
    function getAllArea(){
        return $http.get('/devicerepair/allArea')
    }
    //获取添加中所有部门的名字
    function getAllOrage(){
        return $http.get('/devicerepair/allOrageDepartment')
    }
    //获取所有用户
    function getAllGetPerson(){
        return $http.get('/devicerepair/allGetPerson')
    }
    //福利模块审核
    function  welfareRepair(data){
        return $http.post('/devicerepair/welfareAudit ',data)
    }
    //项目经理审核
    function auditRepair(data){
        return $http.post('/devicerepair/pmAudit',data)
    }
    //设备报废
    function repairScrap(data){
        return $http.post('/devicerepair/deviceScrap',data)
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
