var app = angular.module('reward', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectBonus.reward", {
        url : "/reward",
        views : {
            "content@root.projectBonus" : {
                templateUrl : "root/projectBonus/reward/_res/html/index.html",
                controller:"rewardCtrl"
            },"menu@root.projectBonus" : {
                templateUrl : "root/projectBonus/reward/_res/html/menu.html",
                controller:"rewardMenuCtrl"
            }
        }
    }).state("root.projectBonus.reward.list[12]",{
        url:"/list[12]?id=&name=&page=&competitive=",
        views:{
            "content@root.projectBonus.reward":{
                templateUrl : "root/projectBonus/reward/list/_res/html/index.html",
                controller:'rewardListCtrl'
            }
        }
    }).state("root.projectBonus.reward.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.projectBonus.reward":{
                templateUrl : "root/projectBonus/reward/add/_res/html/index.html",
                controller:'rewardAddCtrl'
            }
        }
    }).state("root.projectBonus.reward.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectBonus.reward":{
                templateUrl : "root/projectBonus/reward/edit/_res/html/index.html",
                controller:'rewardEditCtrl'
            }
        }
    }).state("root.projectBonus.reward.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.projectBonus.reward":{
                templateUrl : "root/projectBonus/reward/summary/_res/html/index.html",
                controller:'summaryCtrl'
            }
        }
    })
});