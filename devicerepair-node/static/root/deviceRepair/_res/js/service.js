var app = angular.module('diviceRepairModule');
app.factory('diviceRepairSer', function($http){
    return {
        navdiviceRepair : navdiviceRepair,
        setdiviceRepair : setdiviceRepair
    };
    function navdiviceRepair(){
        return $http.get('/devicerepair/sonPermission');
    }
    function setdiviceRepair(){
        return $http.get('/devicerepair/setButtonPermission');
    }
});