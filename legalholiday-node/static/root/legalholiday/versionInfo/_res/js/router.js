var app = angular.module('versionInfo',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.legalholiday.versionInfo", {
        url: "/versionInfo",
        views: {
            "content@root.legalholiday": {
                templateUrl: "root/legalholiday/versionInfo/_res/html/index.html",
                controller: "versionInfoCtrl"
            }
        }
    })
})