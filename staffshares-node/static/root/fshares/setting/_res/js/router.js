var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.fshares.setting", {
        url : "/setting",
        views : {
            "content@root.fshares" : {
                templateUrl : "root/fshares/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.fshares" : {
                templateUrl : "root/fshares/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.fshares.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.fshares.setting":{
                templateUrl : "root/fshares/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.fshares.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.fshares.setting":{
                templateUrl : "root/fshares/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});