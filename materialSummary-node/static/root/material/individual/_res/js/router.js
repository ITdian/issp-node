var app = angular.module('individual', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.material.individual", {
        url : "/individual",
        views : {
            "content@root.material" : {
                templateUrl : "root/material/individual/_res/html/index.html",
                controller:"indivCtrl"
            },"menu@root.material" : {
                templateUrl : "root/material/individual/_res/html/menu.html",
                controller:"indivMenuCtrl"
            }
        }
    }).state("root.material.individual.summaryDay[12]",{
        url:"/summaryDay[12]",
        views:{
            "content@root.material.individual":{
                templateUrl : "root/material/individual/summaryDay/_res/html/index.html",
                controller:'summaryDayCtrl'
            }
        }
    }).state("root.material.individual.summaryWeek[12]",{
        url:"/summaryWeek[12]",
        views:{
            "content@root.material.individual":{
                templateUrl : "root/material/individual/summaryWeek/_res/html/index.html",
                controller:'summaryWeekCtrl'
            }
        }
    }).state("root.material.individual.summaryMonth[12]",{
        url:"/summaryMonth[12]",
        views:{
            "content@root.material.individual":{
                templateUrl : "root/material/individual/summaryMonth/_res/html/index.html",
                controller:'summaryMonthCtrl'
            }
        }
    }).state("root.material.individual.summaryYear[12]",{
        url:"/summaryYear[12]",
        views:{
            "content@root.material.individual":{
                templateUrl : "root/material/individual/summaryYear/_res/html/index.html",
                controller:'summaryYearCtrl'
            }
        }
    })
});