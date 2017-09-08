var app = angular.module('leave', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.holiday.leave", {
        url : "/leave",
        views : {
            "content@root.holiday" : {
                templateUrl : "root/holiday/leave/_res/html/index.html",
                controller:"leadCtrl"
            },"menu@root.holiday" : {
                templateUrl : "root/holiday/leave/_res/html/menu.html",
                controller:"leadMenuCtrl"
            }
        }
    }).state("root.holiday.leave.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.holiday.leave":{
                templateUrl : "root/holiday/leave/list/_res/html/index.html",
                controller:'leadListCtrl'
            }
        }
    }).state("root.holiday.leave.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.holiday.leave":{
                templateUrl : "root/holiday/leave/edit/_res/html/index.html",
                controller:'webEditCtrl'
            }
        }
    })
});