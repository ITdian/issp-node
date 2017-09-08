var app = angular.module('buy', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.fshares.buy", {
        url : "/buy",
        views : {
            "content@root.fshares" : {
                templateUrl : "root/fshares/buy/_res/html/index.html",
                controller:"buyCtrl"
            },"menu@root.fshares" : {
                templateUrl : "root/fshares/buy/_res/html/menu.html",
                controller:"buyMenuCtrl"
            }
        }
    }).state("root.fshares.buy.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.fshares.buy":{
                templateUrl : "root/fshares/buy/list/_res/html/index.html",
                controller:'buyListCtrl'
            }
        }
    }).state("root.fshares.buy.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.fshares.buy":{
                templateUrl : "root/fshares/buy/summary/_res/html/index.html",
                controller:'buySummaryCtrl'
            }
        }
    }).state("root.fshares.buy.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.fshares.buy":{
                templateUrl : "root/fshares/buy/edit/_res/html/index.html",
                controller:'webEditCtrl'
            }
        }
    })
});