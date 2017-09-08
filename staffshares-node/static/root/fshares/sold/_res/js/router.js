var app = angular.module('sold', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.fshares.sold", {
        url : "/sold",
        views : {
            "content@root.fshares" : {
                templateUrl : "root/fshares/sold/_res/html/index.html",
                controller:"soldCtrl"
            },"menu@root.fshares" : {
                templateUrl : "root/fshares/sold/_res/html/menu.html",
                controller:"soldMenuCtrl"
            }
        }
    }).state("root.fshares.sold.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.fshares.sold":{
                templateUrl : "root/fshares/sold/list/_res/html/index.html",
                controller:'soldListCtrl'
            }
        }
    }).state("root.fshares.sold.summary[12]",{
        url:"/summary[12]",
        views:{
            "content@root.fshares.sold":{
                templateUrl : "root/fshares/sold/summary/_res/html/index.html",
                controller:'soldSummaryCtrl'
            }
        }
    })
});