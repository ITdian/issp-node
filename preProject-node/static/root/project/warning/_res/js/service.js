var app = angular.module('warningServer',[]);
app.factory('warningSer',function ($http) {
    return {
        listWarning : listWarning,
        countWarning:countWarning,
        addWarning:addWarning,
        getWarning:getWarning,
        editWarning:editWarning,
        deleteWarning:deleteWarning,
        allCostDifferences:allCostDifferences
    };
    function listWarning(data) {
        return $http.get('/listWarning/lit',{params:data})
    }
    function countWarning() {
        return $http.get('/countWarning/count')
    }
    function addWarning(data) {
        return $http.post('/addWarning/add',data)
    }
    function getWarning(data) {
        return $http.get('/getWarning/id',{params:data})
    }
    function editWarning(data) {
        return $http.post('/editWarning/edit',data)
    }
    function deleteWarning(data) {
        return $http.get('/deleteWarning/delete',{params:data})
    }
    function allCostDifferences() {
        return $http.get('/allCostDifferences/id')
    }
});
