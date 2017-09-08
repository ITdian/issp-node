var app = angular.module('awardinfo', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recomManagement.awardinfo", {
        url : "/awardinfo",
        views : {
            "content@root.recomManagement" : {
                templateUrl : "root/recomManagement/awardinfo/_res/html/index.html",
                controller:"awardinfoCtrl"
            },"menu@root.recomManagement" : {
                templateUrl : "root/recomManagement/awardinfo/_res/html/menu.html",
                controller:"awardinfoMenuCtrl"
            }
        }
    }).state("root.recomManagement.awardinfo.list[12]",{
        url:"/list[12]?id=&name=&page=&type=&subject=&cooperate=&first=&second=&area=&property=&makeProject=",
        views:{
            "content@root.recomManagement.awardinfo":{
                templateUrl : "root/recomManagement/awardinfo/list/_res/html/index.html",
                controller:'awardListCtrl'
            }
        }
    }).state("root.recomManagement.awardinfo.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.recomManagement.awardinfo":{
                templateUrl : "root/recomManagement/awardinfo/edit/_res/html/index.html",
                controller:'awardEditCtrl'
            }
        }
    })
});
