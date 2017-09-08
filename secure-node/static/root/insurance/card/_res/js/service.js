var app = angular.module('cardServer',[]);
app.factory('cardSer',function ($http) {
    return {
        cardList : cardList,
        cardAdd:cardAdd,
        cardEdit:cardEdit,
        cardId:cardId,
        cardCount:cardCount,
        cardDelete:cardDelete,
        cardPermission:cardPermission,
        getName:getName,
        getEmployeeNum:getEmployeeNum,
        getCity:getCity
    };
    function cardList(data) {
        return $http.get('/cardList/list',{
            params: data

        })
    }

    //添加
    function cardAdd(data){
        return $http.post('/cardAdd/add',data)
    }
    //编辑
    function cardEdit(data){
        return $http.post('/cardEdit/edit',data)
    }
    //id查询
    function cardId(data){
        return $http.get('/cardId/Id',{
            params:data
        })
    }
    //分页总条数
    function cardCount(){
        return $http.get('/cardCount/count')
    }
    //删除
    function cardDelete(data){

        return $http.get('/cardDelete/delete',{
            params: data

        })
    }
    //----------------------------
    //功能导航权限
    function cardPermission(data){

        return $http.get('/cardPermission/permission/'+data);
    }
    //------------------------------------------------------
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
    //获取地区
    function getCity(data){

        return $http.get('/getCity/city',{
            params: data

        })
    }
});
