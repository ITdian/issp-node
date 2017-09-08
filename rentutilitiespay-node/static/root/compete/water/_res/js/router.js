var app = angular.module('water', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.water", {
        url : "/water",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/water/_res/html/index.html",
                controller:"waterCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/water/_res/html/menu.html",
                controller:"waterMenuCtrl"
            }
        }
    }).state("root.compete.water.list[12]",{
        url:"/list[12]?id=&name=&page=&competitive=",
        views:{
            "content@root.compete.water":{
                templateUrl : "root/compete/water/list/_res/html/index.html",
                controller:'waterListCtrl'
            }
        }
    }).state("root.compete.water.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.water":{
                templateUrl : "root/compete/water/add/_res/html/index.html",
                controller:'waterAddCtrl'
            }
        }
    }).state("root.compete.water.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.compete.water":{
                templateUrl : "root/compete/water/edit/_res/html/index.html",
                controller:'waterEditCtrl'
            }
        }
    }).state("root.compete.water.financial[12]",{
        url:"/financial[12]?id=&page=",
        views:{
            "content@root.compete.water":{
                templateUrl : "root/compete/water/financial/_res/html/index.html",
                controller:'waterFinancialCtrl'
            }
        }
    }).state("root.compete.water.verify[12]",{
        url:"/verify[12]?id=&page=",
        views:{
            "content@root.compete.water":{
                templateUrl : "root/compete/water/verify/_res/html/index.html",
                controller:'waterVerifyCtrl'
            }
        }
    }).state("root.compete.water.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.compete.water":{
                templateUrl : "root/compete/water/summary/_res/html/index.html",
                controller:'summaryCtrl'
            }
        }
    })
});