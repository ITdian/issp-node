var app = angular.module('warranty', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.warranty", {
        url : "/warranty",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/warranty/_res/html/index.html",
                controller:"warCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/warranty/_res/html/menu.html",
                controller:"warMenuCtrl"
            }
        }
    }).state("root.material.warranty.summaryDay[12]",{
        url:"/summaryDay[12]",
        views:{
            "content@root.material.warranty":{
                templateUrl : "root/material/warranty/summaryDay/_res/html/index.html",
                controller:'summaryDayCtrl'
            }
        }
    }).state("root.material.warranty.summaryWeek[12]",{
        url:"/summaryWeek[12]",
        views:{
            "content@root.material.warranty":{
                templateUrl : "root/material/warranty/summaryWeek/_res/html/index.html",
                controller:'summaryWeekCtrl'
            }
        }
    }).state("root.material.warranty.summaryMonth[12]",{
        url:"/summaryMonth[12]",
        views:{
            "content@root.material.warranty":{
                templateUrl : "root/material/warranty/summaryMonth/_res/html/index.html",
                controller:'summaryMonthCtrl'
            }
        }
    }).state("root.material.warranty.summaryYear[12]",{
        url:"/summaryYear[12]",
        views:{
            "content@root.material.warranty":{
                templateUrl : "root/material/warranty/summaryYear/_res/html/index.html",
                controller:'summaryYearCtrl'
            }
        }
    })
});