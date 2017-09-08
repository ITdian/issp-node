var app = angular.module('recommendrequire', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recomManagement.recommendrequire", {
        url : "/recommendrequire",
        views : {
            "content@root.recomManagement" : {
                templateUrl : "root/recomManagement/recommendrequire/_res/html/index.html",
                controller:"recommendrequireCtrl"
            },"menu@root.recomManagement" : {
                templateUrl : "root/recomManagement/recommendrequire/_res/html/menu.html",
                controller:"deviceMenuCtrl"
            }
        }
    }).state("root.recomManagement.recommendrequire.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.recomManagement.recommendrequire":{
                templateUrl : "root/recomManagement/recommendrequire/list/_res/html/index.html",
                controller:'requireListCtrl'
            }
        }
    }).state("root.recomManagement.recommendrequire.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.recomManagement.recommendrequire":{
                templateUrl : "root/recomManagement/recommendrequire/add/_res/html/index.html",
                controller:'requireAddCtrl'
            }
        }
    }).state("root.recomManagement.recommendrequire.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.recomManagement.recommendrequire":{
                templateUrl : "root/recomManagement/recommendrequire/edit/_res/html/index.html",
                controller:'requireEditCtrl'
            }
        }
    })
});