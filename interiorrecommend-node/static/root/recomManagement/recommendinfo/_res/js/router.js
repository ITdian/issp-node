var app = angular.module('recommendinfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recomManagement.recommendinfo", {
        url : "/recommendinfo",
        views : {
            "content@root.recomManagement" : {
                templateUrl : "root/recomManagement/recommendinfo/_res/html/index.html",
                controller:"recommendCtrl"
            },"menu@root.recomManagement" : {
                templateUrl : "root/recomManagement/recommendinfo/_res/html/menu.html",
                controller:"infoMenuCtrl"
            }
        }
    }).state("root.recomManagement.recommendinfo.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.recomManagement.recommendinfo":{
                templateUrl : "root/recomManagement/recommendinfo/list/_res/html/index.html",
                controller:'infoListCtrl'
            }
        }
    }).state("root.recomManagement.recommendinfo.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.recomManagement.recommendinfo":{
                templateUrl : "root/recomManagement/recommendinfo/add/_res/html/index.html",
                controller:'infoAddCtrl'
            }
        }
    }).state("root.recomManagement.recommendinfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.recomManagement.recommendinfo":{
                templateUrl : "root/recomManagement/recommendinfo/edit/_res/html/index.html",
                controller:'infoEditCtrl'
            }
        }
    }).state("root.recomManagement.recommendinfo.audit[12]",{
        url:"/audit[12]?id=&page=",
        views:{
            "content@root.recomManagement.recommendinfo":{
                templateUrl : "root/recomManagement/recommendinfo/audit/_res/html/index.html",
                controller:'auditCtrl'
            }
        }
    }).state("root.recomManagement.recommendinfo.acces[12]",{
        url:"/acces[12]?id=&page=",
        views:{
            "content@root.recomManagement.recommendinfo":{
                templateUrl : "root/recomManagement/recommendinfo/acces/_res/html/index.html",
                controller:'aotAccesCtrl'
            }
        }
    })
});

