var app = angular.module('project', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.legalholiday.holiday.project", {
        url : "/project",
        views : {  
            "content@root.legalholiday.holiday" : {
                templateUrl : "root/legalholiday/holiday/project/_res/html/index.html",
                controller:"projectCtrl"
            },"menu@root.legalholiday.holiday" : {
                templateUrl : "root/legalholiday/holiday/project/_res/html/menu.html",
                controller:"projectMenuCtrl"
            }
        }
    }).state("root.legalholiday.holiday.project.list[12]",{
        url:"/list[12]?id=&page=&name=",
        views:{
            "content@root.legalholiday.holiday.project":{
                templateUrl : "root/legalholiday/holiday/project/list/_res/html/index.html",
                controller:'projectListCtrl'
            }
        }
    }).state("root.legalholiday.holiday.project.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.legalholiday.holiday.project":{
                templateUrl : "root/legalholiday/holiday/project/add/_res/html/index.html",
                controller:'projectAddCtrl'
            }
        }
    }).state("root.legalholiday.holiday.project.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.legalholiday.holiday.project":{
                templateUrl : "root/legalholiday/holiday/project/edit/_res/html/index.html",
                controller:'projectEditCtrl'
            }
        }
    }).state("root.legalholiday.holiday.project.checkTime[12]",{
        url:"/checkTime[12]?id=&page=&num=",
        views:{
            "content@root.legalholiday.holiday.project":{
                templateUrl : "root/legalholiday/holiday/project/checkTime/_res/html/index.html",
                controller:'checkTimeCtrl'
            }
        }
    }).state("root.legalholiday.holiday.project.checkPro[12]",{
        url:"/checkPro[12]?id=&page",
        views:{
            "content@root.legalholiday.holiday.project":{
                templateUrl : "root/legalholiday/holiday/project/checkPro/_res/html/index.html",
                controller:'checkProCtrl'
            }
        }
    }).state("root.legalholiday.holiday.project.checkPeo[12]",{
        url:"/checkPeo[12]?id=&page",
        views:{
            "content@root.legalholiday.holiday.project":{
                templateUrl : "root/legalholiday/holiday/project/checkPeo/_res/html/index.html",
                controller:'checkPeoCtrl'
            }
        }
    }).state("root.legalholiday.holiday.project.checkGift[12]",{
        url:"/checkGift[12]?id=&page",
        views:{
            "content@root.legalholiday.holiday.project":{
                templateUrl : "root/legalholiday/holiday/project/checkGift/_res/html/index.html",
                controller:'checkGiftCtrl'
            }
        }
    }).state("root.legalholiday.holiday.project.checkNotice[12]",{
        url:"/checkNotice[12]?id=&page",
        views:{
            "content@root.legalholiday.holiday.project":{
                templateUrl : "root/legalholiday/holiday/project/checkNotice/_res/html/index.html",
                controller:'checkNoticeCtrl'
            }
        }
    })
});