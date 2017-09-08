var app = angular.module('promotioned', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.levelupskill.promotioned", {
        url : "/promotioned",
        views : {
            "content@root.levelupskill" : {
                templateUrl : "root/levelupskill/promotioned/_res/html/index.html",
                controller:"promoedCtrl"
            },"menu@root.levelupskill" : {
                templateUrl : "root/levelupskill/promotioned/_res/html/menu.html",
                controller:"promoedMenuCtrl"
            }
        }
    }).state("root.levelupskill.promotioned.list[12]",{
        url:"/list[12]?id=&name=&page=&names=&startTimes=&endTimes=&status=",
        views:{
            "content@root.levelupskill.promotioned":{
                templateUrl : "root/levelupskill/promotioned/list/_res/html/index.html",
                controller:'promoedListCtrl'
            }
        }
    }).state("root.levelupskill.promotioned.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.levelupskill.promotioned":{
                templateUrl : "root/levelupskill/promotioned/add/_res/html/index.html",
                controller:'promoedAddCtrl'
            }
        }
    }).state("root.levelupskill.promotioned.summaryStatus[12]",{
        url:"/summaryStatus[12]",
        views:{
            "content@root.levelupskill.promotioned":{
                templateUrl : "root/levelupskill/promotioned/summaryStatus/_res/html/index.html",
                controller:'summaryStatusCtrl'
            }
        }
    }).state("root.levelupskill.promotioned.summaryNames[12]",{
        url:"/summaryNames[12]",
        views:{
            "content@root.levelupskill.promotioned":{
                templateUrl : "root/levelupskill/promotioned/summaryNames/_res/html/index.html",
                controller:'summaryNamesCtrl'
            }
        }
    }).state("root.levelupskill.promotioned.summaryTimes[12]",{
        url:"/summaryTimes[12]",
        views:{
            "content@root.levelupskill.promotioned":{
                templateUrl : "root/levelupskill/promotioned/summaryTimes/_res/html/index.html",
                controller:'summaryTimesCtrl'
            }
        }
    }).state("root.levelupskill.promotioned.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.levelupskill.promotioned":{
                templateUrl : "root/levelupskill/promotioned/edit/_res/html/index.html",
                controller:'webEditCtrl'
            }
        }
    })
});