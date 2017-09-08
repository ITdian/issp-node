var app = angular.module('source', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.source", {
        url : "/source",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/source/_res/html/index.html",
                controller:"sourCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/source/_res/html/menu.html",
                controller:"sourMenuCtrl"
            }
        }
    }).state("root.material.source.summaryDay[12]",{
        url:"/summaryDay[12]",
        views:{
            "content@root.material.source":{
                templateUrl : "root/material/source/summaryDay/_res/html/index.html",
                controller:'summaryDayCtrl'
            }
        }
    }).state("root.material.source.summaryWeek[12]",{
        url:"/summaryWeek[12]",
        views:{
            "content@root.material.source":{
                templateUrl : "root/material/source/summaryWeek/_res/html/index.html",
                controller:'summaryWeekCtrl'
            }
        }
    }).state("root.material.source.summaryMonth[12]",{
        url:"/summaryMonth[12]",
        views:{
            "content@root.material.source":{
                templateUrl : "root/material/source/summaryMonth/_res/html/index.html",
                controller:'summaryMonthCtrl'
            }
        }
    }).state("root.material.source.summaryYear[12]",{
        url:"/summaryYear[12]",
        views:{
            "content@root.material.source":{
                templateUrl : "root/material/source/summaryYear/_res/html/index.html",
                controller:'summaryYearCtrl'
            }
        }
    })
});