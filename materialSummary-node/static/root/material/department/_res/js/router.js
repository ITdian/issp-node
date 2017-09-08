var app = angular.module('department', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.department", {
        url : "/department",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/department/_res/html/index.html",
                controller:"departCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/department/_res/html/menu.html",
                controller:"departMenuCtrl"
            }
        }
    }).state("root.material.department.summaryDay[12]",{
        url:"/summaryDay[12]",
        views:{
            "content@root.material.department":{
                templateUrl : "root/material/department/summaryDay/_res/html/index.html",
                controller:'summaryDayCtrl'
            }
        }
    }).state("root.material.department.summaryWeek[12]",{
        url:"/summaryWeek[12]",
        views:{
            "content@root.material.department":{
                templateUrl : "root/material/department/summaryWeek/_res/html/index.html",
                controller:'summaryWeekCtrl'
            }
        }
    }).state("root.material.department.summaryMonth[12]",{
        url:"/summaryMonth[12]",
        views:{
            "content@root.material.department":{
                templateUrl : "root/material/department/summaryMonth/_res/html/index.html",
                controller:'summaryMonthCtrl'
            }
        }
    }).state("root.material.department.summaryYear[12]",{
        url:"/summaryYear[12]",
        views:{
            "content@root.material.department":{
                templateUrl : "root/material/department/summaryYear/_res/html/index.html",
                controller:'summaryYearCtrl'
            }
        }
    })
});