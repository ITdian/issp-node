var app = angular.module('function', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.levelupskill.function", {
        url : "/function",
        views : {
            "content@root.levelupskill" : {
                templateUrl : "root/levelupskill/function/_res/html/index.html",
                controller:"functionCtrl"
            },"menu@root.levelupskill" : {
                templateUrl : "root/levelupskill/function/_res/html/menu.html",
                controller:"functionMenuCtrl"
            }
        }
    }).state("root.levelupskill.function.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.levelupskill.function":{
                templateUrl : "root/levelupskill/function/list/_res/html/index.html",
                controller:'functionListCtrl'
            }
        }
    }).state("root.levelupskill.function.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.levelupskill.function":{
                templateUrl : "root/levelupskill/function/add/_res/html/index.html",
                controller:'functionAddCtrl'
            }
        }
    }).state("root.levelupskill.function.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.levelupskill.function":{
                templateUrl : "root/levelupskill/function/edit/_res/html/index.html",
                controller:'functionEditCtrl'
            }
        }
    })
});