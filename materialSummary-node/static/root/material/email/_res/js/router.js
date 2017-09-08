var app = angular.module('email', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.email", {
        url : "/email",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/email/_res/html/index.html",
                controller:"emailCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/email/_res/html/menu.html",
                controller:"emailMenuCtrl"
            }
        }
    }).state("root.material.email.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.material.email":{
                templateUrl : "root/material/email/list/_res/html/index.html",
                controller:'emailListCtrl'
            }
        }
    }).state("root.material.email.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.material.email":{
                templateUrl : "root/material/email/add/_res/html/index.html",
                controller:'emailAddCtrl'
            }
        }
    }).state("root.material.email.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.material.email":{
                templateUrl : "root/material/email/edit/_res/html/index.html",
                controller:'emailEditCtrl'
            }
        }
    })
});