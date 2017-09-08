var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.legalholiday.setting", {
        url : "/setting",
        views : {
            "content@root.legalholiday" : {
                templateUrl : "root/legalholiday/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.legalholiday" : {
                templateUrl : "root/legalholiday/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.legalholiday.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.legalholiday.setting":{
                templateUrl : "root/legalholiday/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.legalholiday.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.legalholiday.setting":{
                templateUrl : "root/legalholiday/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});