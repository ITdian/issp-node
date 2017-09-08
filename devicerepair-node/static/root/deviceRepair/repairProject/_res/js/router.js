var app = angular.module('repairProject', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.deviceRepair.repairProject", {
        url : "/repairProject",
        views : {
            "content@root.deviceRepair" : {
                templateUrl : "root/deviceRepair/repairProject/_res/html/index.html",
                controller:"deviceCtrl"
            },"menu@root.deviceRepair" : {
                templateUrl : "root/deviceRepair/repairProject/_res/html/menu.html",
                controller:"deviceMenuCtrl"
            }
        }
    }).state("root.deviceRepair.repairProject.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.deviceRepair.repairProject":{
                templateUrl : "root/deviceRepair/repairProject/list/_res/html/index.html",
                controller:'repairListCtrl'
            }
        }
    }).state("root.deviceRepair.repairProject.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.deviceRepair.repairProject":{
                templateUrl : "root/deviceRepair/repairProject/add/_res/html/index.html",
                controller:'repairAddCtrl'
            }
        }
    }).state("root.deviceRepair.repairProject.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.deviceRepair.repairProject":{
                templateUrl : "root/deviceRepair/repairProject/edit/_res/html/index.html",
                controller:'repairEditCtrl'
            }
        }
    }).state("root.deviceRepair.repairProject.welfare[12]",{
        url:"/welfare[12]?id=&page=",
        views:{
            "content@root.deviceRepair.repairProject":{
                templateUrl : "root/deviceRepair/repairProject/welfare/_res/html/index.html",
                controller:'repairWelfareCtrl'
            }
        }
    }).state("root.deviceRepair.repairProject.pmAudit[12]",{
        url:"/pmAudit[12]?id=&page=",
        views:{
            "content@root.deviceRepair.repairProject":{
                templateUrl : "root/deviceRepair/repairProject/pmAudit/_res/html/index.html",
                controller:'repairpmAuditCtrl'
            }
        }
    }).state("root.deviceRepair.repairProject.deviceScrap[12]",{
        url:"/deviceScrap[12]?id=&page=",
        views:{
            "content@root.deviceRepair.repairProject":{
                templateUrl : "root/deviceRepair/repairProject/deviceScrap/_res/html/index.html",
                controller:'repairScrapCtrl'
            }
        }
    }).state("root.deviceRepair.repairProject.fetchDevice[12]",{
        url:"/fetchDevice[12]?id=&page=",
        views:{
            "content@root.deviceRepair.repairProject":{
                templateUrl : "root/deviceRepair/repairProject/fetchDevice/_res/html/index.html",
                controller:'fetchDeviceCtrl'
            }
        }
    }).state("root.deviceRepair.repairProject.uploadFile[12]",{
        url:"/uploadFile[12]?id=&page=",
        views:{
            "content@root.deviceRepair.repairProject":{
                templateUrl : "root/deviceRepair/repairProject/uploadFile/_res/html/index.html",
                controller:'repairUploadCtrl'
            }
        }
    }).state("root.deviceRepair.repairProject.view[12]",{
        url:"/view[12]?id=&view=",
        views:{
            "content@root.deviceRepair.repairProject":{
                templateUrl : "root/deviceRepair/repairProject/view/_res/html/index.html",
                controller:'deviceViewCtrl'
            }
        }
    })
});