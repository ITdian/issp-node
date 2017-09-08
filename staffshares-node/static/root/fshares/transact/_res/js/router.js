var app = angular.module('transact', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.fshares.transact", {
        url : "/transact",
        views : {
            "content@root.fshares" : {
                templateUrl : "root/fshares/transact/_res/html/index.html",
                controller:"tranCtrl"
            },"menu@root.fshares" : {
                templateUrl : "root/fshares/transact/_res/html/menu.html",
                controller:"tranMenuCtrl"
            }
        }
    }).state("root.fshares.transact.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.fshares.transact":{
                templateUrl : "root/fshares/transact/list/_res/html/index.html",
                controller:'tranListCtrl'
            }
        }
    })
});