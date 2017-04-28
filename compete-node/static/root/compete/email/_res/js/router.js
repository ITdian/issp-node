var app = angular.module('email', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.email", {
        url : "/email",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/email/_res/html/index.html",
                controller:"emailCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/email/_res/html/menu.html",
                controller:"emailMenuCtrl"
            }
        }
    }).state("root.compete.email.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.compete.email":{
                templateUrl : "root/compete/email/add/_res/html/index.html",
                controller:'emailAddCtrl'
            }
        }
    }).state("root.compete.email.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.compete.email":{
                templateUrl : "root/compete/email/edit/_res/html/index.html",
                controller:'emailEditCtrl'
            }
        }
    })
});