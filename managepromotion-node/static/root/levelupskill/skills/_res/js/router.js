var app = angular.module('skills', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.levelupskill.skills", {
        url : "/skills",
        views : {
            "content@root.levelupskill" : {
                templateUrl : "root/levelupskill/skills/_res/html/index.html",
                controller:"skilCtrl"
            },"menu@root.levelupskill" : {
                templateUrl : "root/levelupskill/skills/_res/html/menu.html",
                controller:"skilMenuCtrl"
            }
        }
    }).state("root.levelupskill.skills.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.levelupskill.skills":{
                templateUrl : "root/levelupskill/skills/list/_res/html/index.html",
                controller:'skilListCtrl'
            }
        }
    }).state("root.levelupskill.skills.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.levelupskill.skills":{
                templateUrl : "root/levelupskill/skills/add/_res/html/index.html",
                controller:'skilAddCtrl'
            }
        }
    }).state("root.levelupskill.skills.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.levelupskill.skills":{
                templateUrl : "root/levelupskill/skills/edit/_res/html/index.html",
                controller:'skilEditCtrl'
            }
        }
    })
});