var app = angular.module('recomModule');
app.factory('contractsSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/awardinfo/sonPermission');
    }
    function setPermission(){
        return $http.get('/awardinfo/setButtonPermission');
    }
});