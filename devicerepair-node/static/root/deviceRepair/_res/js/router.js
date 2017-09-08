var app = angular.module('diviceRepairModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.deviceRepair", {
        url: "/deviceRepair",
        views: {
            "content@root": {
                templateUrl: "root/deviceRepair/_res/html/index.html",
                controller: "deviceRepairCtrl"
            },"nav@root":{
                templateUrl: "root/deviceRepair/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});