var app = angular.module('scheme', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.fshares.scheme", {
        url : "/scheme",
        views : {
            "content@root.fshares" : {
                templateUrl : "root/fshares/scheme/_res/html/index.html",
                controller:"schmCtrl"
            },"menu@root.fshares" : {
                templateUrl : "root/fshares/scheme/_res/html/menu.html",
                controller:"schmMenuCtrl"
            }
        }
    }).state("root.fshares.scheme.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.fshares.scheme":{
                templateUrl : "root/fshares/scheme/list/_res/html/index.html",
                controller:'schmListCtrl'
            }
        }
    }).state("root.fshares.scheme.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.fshares.scheme":{
                templateUrl : "root/fshares/scheme/add/_res/html/index.html",
                controller:'schmAddCtrl'
            }
        }
    }).state("root.fshares.scheme.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.fshares.scheme":{
                templateUrl : "root/fshares/scheme/edit/_res/html/index.html",
                controller:'schmEditCtrl'
            }
        }
    }).state("root.fshares.scheme.issue[12]",{
        url:"/issue[12]?id=&page=",
        views:{
            "content@root.fshares.scheme":{
                templateUrl : "root/fshares/scheme/issue/_res/html/index.html",
                controller:'schmIssueCtrl'
            }
        }
    }).state("root.fshares.scheme.examine[12]",{
        url:"/examine[12]?id=&page=",
        views:{
            "content@root.fshares.scheme":{
                templateUrl : "root/fshares/scheme/examine/_res/html/index.html",
                controller:'schmExamineCtrl'
            }
        }
    })
});