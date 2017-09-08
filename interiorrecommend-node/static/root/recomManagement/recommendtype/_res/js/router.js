var app = angular.module('recommendType', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recomManagement.recommendtype", {
        url : "/recommendtype",
        views : {
            "content@root.recomManagement" : {
                templateUrl : "root/recomManagement/recommendtype/_res/html/index.html",
                controller:"recommendTypeCtrl"
            },"menu@root.recomManagement" : {
                templateUrl : "root/recomManagement/recommendtype/_res/html/menu.html",
                controller:"deviceMenuCtrls"
            }
        }
    }).state("root.recomManagement.recommendtype.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.recomManagement.recommendtype":{
                templateUrl : "root/recomManagement/recommendtype/list/_res/html/index.html",
                controller:'typeListCtrl'
            }
        }
    }).state("root.recomManagement.recommendtype.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.recomManagement.recommendtype":{
                templateUrl : "root/recomManagement/recommendtype/add/_res/html/index.html",
                controller:'TypeAddCtrl'
            }
        }
    }).state("root.recomManagement.recommendtype.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.recomManagement.recommendtype":{
                templateUrl : "root/recomManagement/recommendtype/edit/_res/html/index.html",
                controller:'TypeEditCtrl'
            }
        }
    })
});