var app = angular.module('contractModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.announcement", {
        url: "/announcement",
        views: {
            "content@root": {
                templateUrl: "root/announcement/_res/html/index.html",
                controller: "busContractCtrl"
            },"nav@root":{
                templateUrl: "root/announcement/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});