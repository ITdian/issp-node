var app = angular.module('gift', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.legalholiday.holiday.gift", {
        url : "/gift",
        views : {  
            "content@root.legalholiday.holiday" : {
                templateUrl : "root/legalholiday/holiday/gift/_res/html/index.html",
                controller:"giftCtrl"
            },"menu@root.legalholiday.holiday" : {
                templateUrl : "root/legalholiday/holiday/gift/_res/html/menu.html",
                controller:"giftMenuCtrl"
            }
        }
    }).state("root.legalholiday.holiday.gift.list[12]",{
        url:"/list[12]?id=&page=&name=",
        views:{
            "content@root.legalholiday.holiday.gift":{
                templateUrl : "root/legalholiday/holiday/gift/list/_res/html/index.html",
                controller:'giftListCtrl'
            }
        }
    }).state("root.legalholiday.holiday.gift.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.legalholiday.holiday.gift":{
                templateUrl : "root/legalholiday/holiday/gift/add/_res/html/index.html",
                controller:'giftAddCtrl'
            }
        }
    }).state("root.legalholiday.holiday.gift.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.legalholiday.holiday.gift":{
                templateUrl : "root/legalholiday/holiday/gift/edit/_res/html/index.html",
                controller:'giftEditCtrl'
            }
        }
    })
});