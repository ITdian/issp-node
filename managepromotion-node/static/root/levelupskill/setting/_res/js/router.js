var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.levelupskill.setting", {
        url : "/setting",
        views : {
            "content@root.levelupskill" : {
                templateUrl : "root/levelupskill/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.levelupskill" : {
                templateUrl : "root/levelupskill/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.levelupskill.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.levelupskill.setting":{
                templateUrl : "root/levelupskill/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.levelupskill.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.levelupskill.setting":{
                templateUrl : "root/levelupskill/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});