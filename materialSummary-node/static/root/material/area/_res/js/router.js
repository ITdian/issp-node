var app = angular.module('area', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.area", {
        url : "/area",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/area/_res/html/index.html",
                controller:"subsCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/area/_res/html/menu.html",
                controller:"subsMenuCtrl"
            }
        }
    }).state("root.material.area.summaryDay[12]",{
        url:"/summaryDay[12]",
        views:{
            "content@root.material.area":{
                templateUrl : "root/material/area/summaryDay/_res/html/index.html",
                controller:'summaryDayCtrl'
            }
        }
    }).state("root.material.area.summaryWeek[12]",{
        url:"/summaryWeek[12]",
        views:{
            "content@root.material.area":{
                templateUrl : "root/material/area/summaryWeek/_res/html/index.html",
                controller:'summaryWeekCtrl'
            }
        }
    }).state("root.material.area.summaryMonth[12]",{
        url:"/summaryMonth[12]",
        views:{
            "content@root.material.area":{
                templateUrl : "root/material/area/summaryMonth/_res/html/index.html",
                controller:'summaryMonthCtrl'
            }
        }
    }).state("root.material.area.summaryYear[12]",{
        url:"/summaryYear[12]",
        views:{
            "content@root.material.area":{
                templateUrl : "root/material/area/summaryYear/_res/html/index.html",
                controller:'summaryYearCtrl'
            }
        }
    })
});