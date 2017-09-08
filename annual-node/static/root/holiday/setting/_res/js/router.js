var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.holiday.setting", {
        url : "/setting",
        views : {
            "content@root.holiday" : {
                templateUrl : "root/holiday/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.holiday" : {
                templateUrl : "root/holiday/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.holiday.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.holiday.setting":{
                templateUrl : "root/holiday/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.holiday.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.holiday.setting":{
                templateUrl : "root/holiday/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});