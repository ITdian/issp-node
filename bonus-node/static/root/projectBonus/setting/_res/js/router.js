var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.projectBonus.setting", {
        url : "/setting",
        views : {
            "content@root.projectBonus" : {
                templateUrl : "root/projectBonus/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.projectBonus" : {
                templateUrl : "root/projectBonus/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.projectBonus.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.projectBonus.setting":{
                templateUrl : "root/projectBonus/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.projectBonus.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.projectBonus.setting":{
                templateUrl : "root/projectBonus/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});