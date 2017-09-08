var app = angular.module('legalholiday');
app.factory('legalholidaySer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/legalholiday/sonPermission');
    }
    function setPermission(){
        return $http.get('/legalholiday/setButtonPermission');
    }
});