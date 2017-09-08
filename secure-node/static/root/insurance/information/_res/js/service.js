var app = angular.module('inforServer',[]);
app.factory('inforSer',function ($http) {
    return {
        inforList : inforList,
        inforAdd:inforAdd,
        inforEdit:inforEdit,
        inforId:inforId,
        inforCount:inforCount,
        inforDelete:inforDelete,
        inforPermission:inforPermission,
        inforUrl:inforUrl,
        getName:getName,
        getEmployeeNum:getEmployeeNum,
        getIdCart:getIdCart,
        getBorn:getBorn,
        getTel:getTel
    };
    function inforList(data) {
        return $http.get('/inforList/list',{
            params: data

        })
    }

    //添加
    function inforAdd(data){
        return $http.post('/inforAdd/add',data)
    }
    //编辑
    function inforEdit(data){
        return $http.post('/inforEdit/edit',data)
    }
    //id查询
    function inforId(data){
        return $http.get('/inforId/Id',{
            params:data
        })
    }
    //分页总条数
    function inforCount(){
        return $http.get('/inforCount/count')
    }
    //删除
    function inforDelete(data){

        return $http.get('/inforDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function inforPermission(data){

        return $http.get('/inforPermission/permission/'+data);
    }
    //获取网址
    function inforUrl(data){

        return $http.get('/inforUrl/url',{
            params: data

        })
    }
    //---------------------------------------
    //获取姓名
    function getName(data){

        return $http.get('/getName/name',{
            params: data

        })
    }
    //获取员工编号
    function getEmployeeNum(data){

        return $http.get('/getEmployeeNum/employeeNum',{
            params: data

        })
    }
    //获取身份证号码
    function getIdCart(data){

        return $http.get('/getIdCart/idCart',{
            params: data

        })
    }
    //获取身份证籍贯
    function getBorn(data){

        return $http.get('/getBorn/born',{
            params: data

        })
    }
    //获取联系方式
    function getTel(data){

        return $http.get('/getTel/tel',{
            params: data

        })
    }
});
