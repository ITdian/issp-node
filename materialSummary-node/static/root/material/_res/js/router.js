var app = angular.module('bidding',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.material", {
        url: "/material",
        views: {
            "content@root": {
                templateUrl: "root/material/_res/html/index.html",
                controller: "biddingCtrl"
            },"nav@root":{
                templateUrl: "root/material/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});