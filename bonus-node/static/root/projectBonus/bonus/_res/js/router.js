var app = angular.module('bonus', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectBonus.bonus", {
        url : "/bonus",
        views : {
            "content@root.projectBonus" : {
                templateUrl : "root/projectBonus/bonus/_res/html/index.html",
                controller:"bonuCtrl"
            },"menu@root.projectBonus" : {
                templateUrl : "root/projectBonus/bonus/_res/html/menu.html",
                controller:"bonuMenuCtrl"
            }
        }
    }).state("root.projectBonus.bonus.list[12]",{
        url:"/list[12]?id=&name=&page=&competitive=",
        views:{
            "content@root.projectBonus.bonus":{
                templateUrl : "root/projectBonus/bonus/list/_res/html/index.html",
                controller:'bonuListCtrl'
            }
        }
    }).state("root.projectBonus.bonus.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectBonus.bonus":{
                templateUrl : "root/projectBonus/bonus/add/_res/html/index.html",
                controller:'bonuAddCtrl'
            }
        }
    }).state("root.projectBonus.bonus.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectBonus.bonus":{
                templateUrl : "root/projectBonus/bonus/edit/_res/html/index.html",
                controller:'bonuEditCtrl'
            }
        }
    })
});