var app = angular.module('recomModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.recomManagement", {
        url: "/recomManagement",
        views: {
            "content@root": {
                templateUrl: "root/recomManagement/_res/html/index.html",
                controller: "recomManageCtrl"
            },"nav@root":{
                templateUrl: "root/recomManagement/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});