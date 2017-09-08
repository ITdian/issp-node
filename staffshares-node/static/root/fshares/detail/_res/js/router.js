var app = angular.module('detail', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.fshares.detail", {
        url : "/detail",
        views : {
            "content@root.fshares" : {
                templateUrl : "root/fshares/detail/_res/html/index.html",
                controller:"detailCtrl"
            },"menu@root.fshares" : {
                templateUrl : "root/fshares/detail/_res/html/menu.html",
                controller:"detailMenuCtrl"
            }
        }
    }).state("root.fshares.detail.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.fshares.detail":{
                templateUrl : "root/fshares/detail/list/_res/html/index.html",
                controller:'detailListCtrl'
            }
        }
    }).state("root.fshares.detail.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.fshares.detail":{
                templateUrl : "root/fshares/detail/summary/_res/html/index.html",
                controller:'detailSummaryCtrl'
            }
        }
    })
});