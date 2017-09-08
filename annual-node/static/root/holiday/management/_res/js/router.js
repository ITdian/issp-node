var app = angular.module('management', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.holiday.management", {
        url : "/management",
        views : {
            "content@root.holiday" : {
                templateUrl : "root/holiday/management/_res/html/index.html",
                controller:"manageCtrl"
            },"menu@root.holiday" : {
                templateUrl : "root/holiday/management/_res/html/menu.html",
                controller:"manageMenuCtrl"
            }
        }
    }).state("root.holiday.management.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.holiday.management":{
                templateUrl : "root/holiday/management/list/_res/html/index.html",
                controller:'manageListCtrl'
            }
        }
    }).state("root.holiday.management.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.holiday.management":{
                templateUrl : "root/holiday/management/add/_res/html/index.html",
                controller:'manageAddCtrl'
            }
        }
    }).state("root.holiday.management.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.holiday.management":{
                templateUrl : "root/holiday/management/edit/_res/html/index.html",
                controller:'manageEditCtrl'
            }
        }
    }).state("root.holiday.management.day[12]",{
        url:"/day[12]?id=&page=",
        views:{
            "content@root.holiday.management":{
                templateUrl : "root/holiday/management/day/_res/html/index.html",
                controller:'manageDayCtrl'
            }
        }
    })
});