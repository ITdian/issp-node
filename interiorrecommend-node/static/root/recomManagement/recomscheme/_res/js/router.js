var app = angular.module('repairProject', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recomManagement.recomscheme", {
        url : "/recomscheme",
        views : {
            "content@root.recomManagement" : {
                templateUrl : "root/recomManagement/recomscheme/_res/html/index.html",
                controller:"deviceCtrl"
            },"menu@root.recomManagement" : {
                templateUrl : "root/recomManagement/recomscheme/_res/html/menu.html",
                controller:"deviceMenuCtrl"
            }
        }
    }).state("root.recomManagement.recomscheme.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.recomManagement.recomscheme":{
                templateUrl : "root/recomManagement/recomscheme/list/_res/html/index.html",
                controller:'schemeListCtrl'
            }
        }
    }).state("root.recomManagement.recomscheme.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.recomManagement.recomscheme":{
                templateUrl : "root/recomManagement/recomscheme/add/_res/html/index.html",
                controller:'schemeAddCtrl'
            }
        }
    }).state("root.recomManagement.recomscheme.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.recomManagement.recomscheme":{
                templateUrl : "root/recomManagement/recomscheme/edit/_res/html/index.html",
                controller:'schemeEditCtrl'
            }
        }
    }).state("root.recomManagement.recomscheme.operSug[12]",{
        url:"/operSug[12]?id=&page=",
        views:{
            "content@root.recomManagement.recomscheme":{
                templateUrl : "root/recomManagement/recomscheme/operSug/_res/html/index.html",
                controller:'schemeoperSugCtrl'
            }
        }
    }).state("root.recomManagement.recomscheme.operAudit[12]",{
        url:"/operAudit[12]?id=&page=",
        views:{
            "content@root.recomManagement.recomscheme":{
                templateUrl : "root/recomManagement/recomscheme/operAudit/_res/html/index.html",
                controller:'schemeoperAuditCtrl'
            }
        }
    }).state("root.recomManagement.recomscheme.genAudit[12]",{
        url:"/genAudit[12]?id=&page=",
        views:{
            "content@root.recomManagement.recomscheme":{
                templateUrl : "root/recomManagement/recomscheme/genAudit/_res/html/index.html",
                controller:'schemegenAuditCtrl'
            }
        }
    })
});