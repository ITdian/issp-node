var app = angular.module('rent', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.rent", {
        url : "/rent",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/rent/_res/html/index.html",
                controller:"rentCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/rent/_res/html/menu.html",
                controller:"rentMenuCtrl"
            }
        }
    }).state("root.compete.rent.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.compete.rent":{
                templateUrl : "root/compete/rent/list/_res/html/index.html",
                controller:'rentListCtrl'
            }
        }
    }).state("root.compete.rent.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.rent":{
                templateUrl : "root/compete/rent/add/_res/html/index.html",
                controller:'rentAddCtrl'
            }
        }
    }).state("root.compete.rent.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.compete.rent":{
                templateUrl : "root/compete/rent/summary/_res/html/index.html",
                controller:'rentSummaryCtrl'
            }
        }
    }).state("root.compete.rent.upload[12]",{
        url:"/upload[12]?id=",
        views:{
            "content@root.compete.rent":{
                templateUrl : "root/compete/rent/upload/_res/html/index.html",
                controller:'rentUploadCtrl'
            }
        }
    }).state("root.compete.rent.view[12]",{
        url:"/view[12]?id=",
        views:{
            "content@root.compete.rent":{
                templateUrl : "root/compete/rent/view/_res/html/index.html",
                controller:'rentViewCtrl'
            }
        }    
    }).state("root.compete.rent.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.compete.rent":{
                templateUrl : "root/compete/rent/edit/_res/html/index.html",
                controller:'rentEditCtrl'
            }
        }
    }).state("root.compete.rent.financial[12]",{
        url:"/financial[12]?id=&page=",
        views:{
            "content@root.compete.rent":{
                templateUrl : "root/compete/rent/financial/_res/html/index.html",
                controller:'rentFinancialCtrl'
            }
        }
    })
});