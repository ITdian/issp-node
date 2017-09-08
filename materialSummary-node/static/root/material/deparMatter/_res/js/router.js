var app = angular.module('deparMatter', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.deparMatter", {
        url : "/deparMatter",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/deparMatter/_res/html/index.html",
                controller:"punishCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/deparMatter/_res/html/menu.html",
                controller:"punishMenuCtrl"
            }
        }
    }).state("root.material.deparMatter.summaryDay[12]",{
        url:"/summaryDay[12]",
        views:{
            "content@root.material.deparMatter":{
                templateUrl : "root/material/deparMatter/summaryDay/_res/html/index.html",
                controller:'summaryDayCtrl'
            }
        }
    }).state("root.material.deparMatter.summaryWeek[12]",{
        url:"/summaryWeek[12]",
        views:{
            "content@root.material.deparMatter":{
                templateUrl : "root/material/deparMatter/summaryWeek/_res/html/index.html",
                controller:'summaryWeekCtrl'
            }
        }
    }).state("root.material.deparMatter.summaryMonth[12]",{
        url:"/summaryMonth[12]",
        views:{
            "content@root.material.deparMatter":{
                templateUrl : "root/material/deparMatter/summaryMonth/_res/html/index.html",
                controller:'summaryMonthCtrl'
            }
        }
    }).state("root.material.deparMatter.summaryYear[12]",{
        url:"/summaryYear[12]",
        views:{
            "content@root.material.deparMatter":{
                templateUrl : "root/material/deparMatter/summaryYear/_res/html/index.html",
                controller:'summaryYearCtrl'
            }
        }
    })
});