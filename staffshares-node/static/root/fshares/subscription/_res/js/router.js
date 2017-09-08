var app = angular.module('subscription', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.fshares.subscription", {
        url : "/subscription",
        views : {
            "content@root.fshares" : {
                templateUrl : "root/fshares/subscription/_res/html/index.html",
                controller:"subscripCtrl"
            },"menu@root.fshares" : {
                templateUrl : "root/fshares/subscription/_res/html/menu.html",
                controller:"subscripMenuCtrl"
            }
        }
    }).state("root.fshares.subscription.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.fshares.subscription":{
                templateUrl : "root/fshares/subscription/list/_res/html/index.html",
                controller:'subscripListCtrl'
            }
        }
    }).state("root.fshares.subscription.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.fshares.subscription":{
                templateUrl : "root/fshares/subscription/edit/_res/html/index.html",
                controller:'subscripEditCtrl'
            }
        }
    }).state("root.fshares.subscription.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.fshares.subscription":{
                templateUrl : "root/fshares/subscription/audit/_res/html/index.html",
                controller:'subscripAuditCtrl'
            }
        }
    })
});