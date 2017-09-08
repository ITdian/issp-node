var app = angular.module('maintain', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.maintain", {
        url : "/maintain",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/maintain/_res/html/index.html",
                controller:"mainCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/maintain/_res/html/menu.html",
                controller:"mainMenuCtrl"
            }
        }
    }).state("root.material.maintain.summaryDay[12]",{
        url:"/summaryDay[12]",
        views:{
            "content@root.material.maintain":{
                templateUrl : "root/material/maintain/summaryDay/_res/html/index.html",
                controller:'summaryDayCtrl'
            }
        }
    }).state("root.material.maintain.summaryWeek[12]",{
        url:"/summaryWeek[12]",
        views:{
            "content@root.material.maintain":{
                templateUrl : "root/material/maintain/summaryWeek/_res/html/index.html",
                controller:'summaryWeekCtrl'
            }
        }
    }).state("root.material.maintain.summaryMonth[12]",{
        url:"/summaryMonth[12]",
        views:{
            "content@root.material.maintain":{
                templateUrl : "root/material/maintain/summaryMonth/_res/html/index.html",
                controller:'summaryMonthCtrl'
            }
        }
    }).state("root.material.maintain.summaryYear[12]",{
        url:"/summaryYear[12]",
        views:{
            "content@root.material.maintain":{
                templateUrl : "root/material/maintain/summaryYear/_res/html/index.html",
                controller:'summaryYearCtrl'
            }
        }
    })
});