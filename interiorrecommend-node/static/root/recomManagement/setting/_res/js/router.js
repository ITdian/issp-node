var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.recomManagement.setting", {
        url : "/setting",
        views : {
            "content@root.recomManagement" : {
                templateUrl : "root/recomManagement/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.recomManagement" : {
                templateUrl : "root/recomManagement/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.recomManagement.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.recomManagement.setting":{
                templateUrl : "root/recomManagement/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.recomManagement.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.recomManagement.setting":{
                templateUrl : "root/recomManagement/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});