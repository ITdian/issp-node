var app = angular.module('level', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.levelupskill.level", {
        url : "/level",
        views : {
            "content@root.levelupskill" : {
                templateUrl : "root/levelupskill/level/_res/html/index.html",
                controller:"levelCtrl"
            },"menu@root.levelupskill" : {
                templateUrl : "root/levelupskill/level/_res/html/menu.html",
                controller:"levelMenuCtrl"
            }
        }
    }).state("root.levelupskill.level.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.levelupskill.level":{
                templateUrl : "root/levelupskill/level/list/_res/html/index.html",
                controller:'levelListCtrl'
            }
        }
    }).state("root.levelupskill.level.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.levelupskill.level":{
                templateUrl : "root/levelupskill/level/add/_res/html/index.html",
                controller:'levelAddCtrl'
            }
        }
    }).state("root.levelupskill.level.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.levelupskill.level":{
                templateUrl : "root/levelupskill/level/edit/_res/html/index.html",
                controller:'levelEditCtrl'
            }
        }
    })
});