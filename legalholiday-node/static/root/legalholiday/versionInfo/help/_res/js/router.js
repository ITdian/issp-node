var app = angular.module('help', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.legalholiday.versionInfo.help", {
        url : "/help",
        views : {  
            "content@root.legalholiday.versionInfo" : {
                templateUrl : "root/legalholiday/versionInfo/help/_res/html/index.html",
                controller:"helpCtrl"
            },"menu@root.legalholiday.versionInfo" : {
                templateUrl : "root/legalholiday/versionInfo/help/_res/html/menu.html",
                controller:"helpMenuCtrl"
            }
        }
    }).state("root.legalholiday.versionInfo.help.list[12]",{
        url:"/list[12]?id=&page=",
        views:{
            "content@root.legalholiday.versionInfo.help":{
                templateUrl : "root/legalholiday/versionInfo/help/list/_res/html/index.html",
                controller:'versionInfoListCtrl'
            }
        }
    }).state("root.legalholiday.versionInfo.help.detail[12]",{
        url:"/detail[12]?id=&page=",
        views:{
            "content@root.legalholiday.versionInfo.help":{
                templateUrl : "root/legalholiday/versionInfo/help/detail/_res/html/index.html",
                controller:'helpDetailCtrl'
            }
        }
    }).state("root.legalholiday.versionInfo.help.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.legalholiday.versionInfo.help":{
                templateUrl : "root/legalholiday/versionInfo/help/edit/_res/html/index.html",
                controller:'versionInfoEditCtrl'
            }
        }
    }).state("root.legalholiday.versionInfo.help.answer[12]",{
        url:"/answer[12]?id=&page=",
        views:{
            "content@root.legalholiday.versionInfo.help":{
                templateUrl : "root/legalholiday/versionInfo/help/answer/_res/html/index.html",
                controller:'answerCtrl'
            }
        }
    })
});