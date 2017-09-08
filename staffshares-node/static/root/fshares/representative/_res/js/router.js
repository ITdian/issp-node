var app = angular.module('representative', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.fshares.representative", {
        url : "/representative",
        views : {
            "content@root.fshares" : {
                templateUrl : "root/fshares/representative/_res/html/index.html",
                controller:"represCtrl"
            },"menu@root.fshares" : {
                templateUrl : "root/fshares/representative/_res/html/menu.html",
                controller:"represMenuCtrl"
            }
        }
    }).state("root.fshares.representative.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.fshares.representative":{
                templateUrl : "root/fshares/representative/list/_res/html/index.html",
                controller:'represListCtrl'
            }
        }
    }).state("root.fshares.representative.edit[12]",{
        url:"/edit[12]",
        views:{
            "content@root.fshares.representative":{
                templateUrl : "root/fshares/representative/edit/_res/html/index.html",
                controller:'webEditCtrl'
            }
        }
    })
});