var app = angular.module('substance', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.substance", {
        url : "/substance",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/substance/_res/html/index.html",
                controller:"subsCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/substance/_res/html/menu.html",
                controller:"subsMenuCtrl"
            }
        }
    }).state("root.material.substance.summaryDay[12]",{
        url:"/summaryDay[12]",
        views:{
            "content@root.material.substance":{
                templateUrl : "root/material/substance/summaryDay/_res/html/index.html",
                controller:'summaryDayCtrl'
            }
        }
    }).state("root.material.substance.summaryWeek[12]",{
        url:"/summaryWeek[12]",
        views:{
            "content@root.material.substance":{
                templateUrl : "root/material/substance/summaryWeek/_res/html/index.html",
                controller:'summaryWeekCtrl'
            }
        }
    }).state("root.material.substance.summaryMonth[12]",{
        url:"/summaryMonth[12]",
        views:{
            "content@root.material.substance":{
                templateUrl : "root/material/substance/summaryMonth/_res/html/index.html",
                controller:'summaryMonthCtrl'
            }
        }
    }).state("root.material.substance.summaryYear[12]",{
        url:"/summaryYear[12]",
        views:{
            "content@root.material.substance":{
                templateUrl : "root/material/substance/summaryYear/_res/html/index.html",
                controller:'summaryYearCtrl'
            }
        }
    })
});