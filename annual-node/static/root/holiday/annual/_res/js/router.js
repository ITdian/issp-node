var app = angular.module('annual', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.holiday.annual", {
        url : "/annual",
        views : {
            "content@root.holiday" : {
                templateUrl : "root/holiday/annual/_res/html/index.html",
                controller:"annuCtrl"
            },"menu@root.holiday" : {
                templateUrl : "root/holiday/annual/_res/html/menu.html",
                controller:"annuMenuCtrl"
            }
        }
    }).state("root.holiday.annual.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.holiday.annual":{
                templateUrl : "root/holiday/annual/list/_res/html/index.html",
                controller:'annuListCtrl'
            }
        }
    }).state("root.holiday.annual.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.holiday.annual":{
                templateUrl : "root/holiday/annual/add/_res/html/index.html",
                controller:'annuAddCtrl'
            }
        }
    }).state("root.holiday.annual.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.holiday.annual":{
                templateUrl : "root/holiday/annual/edit/_res/html/index.html",
                controller:'annuEditCtrl'
            }
        }
    }).state("root.holiday.annual.mine[12]",{
        url:"/mine[12]?id=&name=&page=",
        views:{
            "content@root.holiday.annual":{
                templateUrl : "root/holiday/annual/mine/_res/html/index.html",
                controller:'annuMineCtrl'
            }
        }
    }).state("root.holiday.annual.look[12]",{
        url:"/look[12]?id=&page=",
        views:{
            "content@root.holiday.annual":{
                templateUrl : "root/holiday/annual/look/_res/html/index.html",
                controller:'annuLookCtrl'
            }
        }
    })
});