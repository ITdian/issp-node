var app = angular.module('areaMatter', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.areaMatter", {
        url : "/areaMatter",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/areaMatter/_res/html/index.html",
                controller:"areaMCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/areaMatter/_res/html/menu.html",
                controller:"areaMMenuCtrl"
            }
        }
    }).state("root.material.areaMatter.summaryDay[12]",{
        url:"/summaryDay[12]",
        views:{
            "content@root.material.areaMatter":{
                templateUrl : "root/material/areaMatter/summaryDay/_res/html/index.html",
                controller:'summaryDayCtrl'
            }
        }
    }).state("root.material.areaMatter.summaryWeek[12]",{
        url:"/summaryWeek[12]",
        views:{
            "content@root.material.areaMatter":{
                templateUrl : "root/material/areaMatter/summaryWeek/_res/html/index.html",
                controller:'summaryWeekCtrl'
            }
        }
    }).state("root.material.areaMatter.summaryMonth[12]",{
        url:"/summaryMonth[12]",
        views:{
            "content@root.material.areaMatter":{
                templateUrl : "root/material/areaMatter/summaryMonth/_res/html/index.html",
                controller:'summaryMonthCtrl'
            }
        }
    }).state("root.material.areaMatter.summaryYear[12]",{
        url:"/summaryYear[12]",
        views:{
            "content@root.material.areaMatter":{
                templateUrl : "root/material/areaMatter/summaryYear/_res/html/index.html",
                controller:'summaryYearCtrl'
            }
        }
    })
});