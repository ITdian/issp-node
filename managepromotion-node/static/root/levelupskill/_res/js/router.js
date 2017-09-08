var app = angular.module('bidding',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.levelupskill", {
        url: "/levelupskill",
        views: {
            "content@root": {
                templateUrl: "root/levelupskill/_res/html/index.html",
                controller: "biddingCtrl"
            },"nav@root":{
                templateUrl: "root/levelupskill/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});