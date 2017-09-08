var app = angular.module('email', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.business.email", {
        url : "/email",
        views : {
            "content@root.business" : {
                templateUrl : "root/business/email/_res/html/index.html",
                controller:"emailCtrl"
            },"menu@root.business" : {
                templateUrl : "root/business/email/_res/html/menu.html",
                controller:"emailMenuCtrl"
            }
        }
    }).state("root.business.email.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.business.email":{
                templateUrl : "root/business/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    }).state("root.business.email.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.business.email":{
                templateUrl : "root/business/email/add/_res/html/index.html",
                controller:'emailAddCtrl'
            }
        }
    }).state("root.business.email.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.business.email":{
                templateUrl : "root/business/email/edit/_res/html/index.html",
                controller:'emailEditCtrl'
            }
        }
    })
});