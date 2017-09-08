var app = angular.module('awardstandard', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recomManagement.awardstandard", {
        url : "/awardstandard",
        views : {
            "content@root.recomManagement" : {
                templateUrl : "root/recomManagement/awardstandard/_res/html/index.html",
                controller:"awardstandardCtrl"
            },"menu@root.recomManagement" : {
                templateUrl : "root/recomManagement/awardstandard/_res/html/menu.html",
                controller:"deviceMenuCtrl"
            }
        }
    }).state("root.recomManagement.awardstandard.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.recomManagement.awardstandard":{
                templateUrl : "root/recomManagement/awardstandard/list/_res/html/index.html",
                controller:'standListCtrl'
            }
        }
    }).state("root.recomManagement.awardstandard.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.recomManagement.awardstandard":{
                templateUrl : "root/recomManagement/awardstandard/add/_res/html/index.html",
                controller:'standAddCtrl'
            }
        }
    }).state("root.recomManagement.awardstandard.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.recomManagement.awardstandard":{
                templateUrl : "root/recomManagement/awardstandard/edit/_res/html/index.html",
                controller:'standEditCtrl'
            }
        }
    })
});
