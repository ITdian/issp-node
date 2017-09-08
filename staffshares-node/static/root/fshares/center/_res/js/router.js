var app = angular.module('center', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.fshares.center", {
        url : "/center",
        views : {
            "content@root.fshares" : {
                templateUrl : "root/fshares/center/_res/html/index.html",
                controller:"centeCtrl"
            },"menu@root.fshares" : {
                templateUrl : "root/fshares/center/_res/html/menu.html",
                controller:"centeMenuCtrl"
            }
        }
    }).state("root.fshares.center.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.fshares.center":{
                templateUrl : "root/fshares/center/list/_res/html/index.html",
                controller:'centeListCtrl'
            }
        }
    }).state("root.fshares.center.apply[12]",{
        url:"/apply[12]?id=&page=",
        views:{
            "content@root.fshares.center":{
                templateUrl : "root/fshares/center/apply/_res/html/index.html",
                controller:'centeApplyCtrl'
            }
        }
    }).state("root.fshares.center.transact[12]",{
        url:"/transact[12]?id=&page=",
        views:{
            "content@root.fshares.center":{
                templateUrl : "root/fshares/center/transact/_res/html/index.html",
                controller:'centeTransactCtrl'
            }
        }
    }).state("root.fshares.center.buy[12]",{
        url:"/buy[12]?id=&page=",
        views:{
            "content@root.fshares.center":{
                templateUrl : "root/fshares/center/buy/_res/html/index.html",
                controller:'centeBuyCtrl'
            }
        }
    }).state("root.fshares.center.sold[12]",{
        url:"/sold[12]?id=&page=",
        views:{
            "content@root.fshares.center":{
                templateUrl : "root/fshares/center/sold/_res/html/index.html",
                controller:'centeSoldCtrl'
            }
        }
    })
});