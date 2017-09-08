var app = angular.module('participation', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.fshares.participation", {
        url : "/participation",
        views : {
            "content@root.fshares" : {
                templateUrl : "root/fshares/participation/_res/html/index.html",
                controller:"partCtrl"
            },"menu@root.fshares" : {
                templateUrl : "root/fshares/participation/_res/html/menu.html",
                controller:"partMenuCtrl"
            }
        }
    }).state("root.fshares.participation.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.fshares.participation":{
                templateUrl : "root/fshares/participation/list/_res/html/index.html",
                controller:'partListCtrl'
            }
        }
    }).state("root.fshares.participation.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.fshares.participation":{
                templateUrl : "root/fshares/participation/edit/_res/html/index.html",
                controller:'webEditCtrl'
            }
        }
    })
});