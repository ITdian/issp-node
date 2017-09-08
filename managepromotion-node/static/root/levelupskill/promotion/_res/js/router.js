var app = angular.module('promotion', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.levelupskill.promotion", {
        url : "/promotion",
        views : {
            "content@root.levelupskill" : {
                templateUrl : "root/levelupskill/promotion/_res/html/index.html",
                controller:"promoCtrl"
            },"menu@root.levelupskill" : {
                templateUrl : "root/levelupskill/promotion/_res/html/menu.html",
                controller:"promoMenuCtrl"
            }
        }
    }).state("root.levelupskill.promotion.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.levelupskill.promotion":{
                templateUrl : "root/levelupskill/promotion/list/_res/html/index.html",
                controller:'promoListCtrl'
            }
        }
    }).state("root.levelupskill.promotion.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.levelupskill.promotion":{
                templateUrl : "root/levelupskill/promotion/add/_res/html/index.html",
                controller:'promoAddCtrl'
            }
        }
    }).state("root.levelupskill.promotion.comprehensive[12]",{
        url:"/comprehensive[12]?id=&page=",
        views:{
            "content@root.levelupskill.promotion":{
                templateUrl : "root/levelupskill/promotion/comprehensive/_res/html/index.html",
                controller:'promoComprehensiveCtrl'
            }
        }
    }).state("root.levelupskill.promotion.head[12]",{
        url:"/head[12]?id=&page=",
        views:{
            "content@root.levelupskill.promotion":{
                templateUrl : "root/levelupskill/promotion/head/_res/html/index.html",
                controller:'promoHeadCtrl'
            }
        }
    }).state("root.levelupskill.promotion.budget[12]",{
        url:"/budget[12]?id=&page=",
        views:{
            "content@root.levelupskill.promotion":{
                templateUrl : "root/levelupskill/promotion/budget/_res/html/index.html",
                controller:'promoBudgetCtrl'
            }
        }
    }).state("root.levelupskill.promotion.manager[12]",{
        url:"/manager[12]?id=&page=",
        views:{
            "content@root.levelupskill.promotion":{
                templateUrl : "root/levelupskill/promotion/manager/_res/html/index.html",
                controller:'promoManagerCtrl'
            }
        }
    }).state("root.levelupskill.promotion.planning[12]",{
        url:"/planning[12]?id=&page=",
        views:{
            "content@root.levelupskill.promotion":{
                templateUrl : "root/levelupskill/promotion/planning/_res/html/index.html",
                controller:'promoPlanningCtrl'
            }
        }
    }).state("root.levelupskill.promotion.general[12]",{
        url:"/general[12]?id=&page=",
        views:{
            "content@root.levelupskill.promotion":{
                templateUrl : "root/levelupskill/promotion/general/_res/html/index.html",
                controller:'promoGeneralCtrl'
            }
        }
    })
});