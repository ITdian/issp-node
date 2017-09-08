var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.deviceRepair.setting", {
        url : "/setting",
        views : {
            "content@root.deviceRepair" : {
                templateUrl : "root/deviceRepair/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.deviceRepair" : {
                templateUrl : "root/deviceRepair/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.deviceRepair.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.deviceRepair.setting":{
                templateUrl : "root/deviceRepair/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.deviceRepair.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.deviceRepair.setting":{
                templateUrl : "root/deviceRepair/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});