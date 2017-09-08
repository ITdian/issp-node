var app = angular.module('bidding',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.holiday", {
        url: "/holiday",
        views: {
            "content@root": {
                templateUrl: "root/holiday/_res/html/index.html",
                controller: "biddingCtrl"
            },"nav@root":{
                templateUrl: "root/holiday/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});