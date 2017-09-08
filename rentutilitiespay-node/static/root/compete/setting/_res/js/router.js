var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.compete.setting", {
        url : "/setting",
        views : {
            "content@root.compete" : {
                templateUrl : "root/compete/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.compete" : {
                templateUrl : "root/compete/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.compete.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.compete.setting":{
                templateUrl : "root/compete/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.compete.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.compete.setting":{
                templateUrl : "root/compete/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});