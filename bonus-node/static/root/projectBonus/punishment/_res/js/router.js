var app = angular.module('punishment', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectBonus.punishment", {
        url : "/punishment",
        views : {
            "content@root.projectBonus" : {
                templateUrl : "root/projectBonus/punishment/_res/html/index.html",
                controller:"punishCtrl"
            },"menu@root.projectBonus" : {
                templateUrl : "root/projectBonus/punishment/_res/html/menu.html",
                controller:"punishMenuCtrl"
            }
        }
    }).state("root.projectBonus.punishment.list[12]",{
        url:"/list[12]?id=&name=&page=&competitive=",
        views:{
            "content@root.projectBonus.punishment":{
                templateUrl : "root/projectBonus/punishment/list/_res/html/index.html",
                controller:'punishListCtrl'
            }
        }
    }).state("root.projectBonus.punishment.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectBonus.punishment":{
                templateUrl : "root/projectBonus/punishment/add/_res/html/index.html",
                controller:'punishAddCtrl'
            }
        }
    }).state("root.projectBonus.punishment.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectBonus.punishment":{
                templateUrl : "root/projectBonus/punishment/edit/_res/html/index.html",
                controller:'punishEditCtrl'
            }
        }
    }).state("root.projectBonus.punishment.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.projectBonus.punishment":{
                templateUrl : "root/projectBonus/punishment/summary/_res/html/index.html",
                controller:'summaryCtrl'
            }
        }






    }).state("root.projectBonus.punishment.summaryReward[12]",{
        url:"/summaryReward[12]",
        views:{
            "content@root.projectBonus.punishment":{
                templateUrl : "root/projectBonus/punishment/summaryReward/_res/html/index.html",
                controller:'summaryRewardCtrl'
            }
        }
    }).state("root.projectBonus.punishment.summaryNumber[12]",{
        url:"/summaryNumber[12]",
        views:{
            "content@root.projectBonus.punishment":{
                templateUrl : "root/projectBonus/punishment/summaryNumber/_res/html/index.html",
                controller:'summaryNumberCtrl'
            }
        }
    }).state("root.projectBonus.punishment.summaryScore[12]",{
        url:"/summaryScore[12]",
        views:{
            "content@root.projectBonus.punishment":{
                templateUrl : "root/projectBonus/punishment/summaryScore/_res/html/index.html",
                controller:'summaryScoreCtrl'
            }
        }
    })
});