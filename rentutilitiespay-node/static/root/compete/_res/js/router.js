var app = angular.module('bidding',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.compete", {
        url: "/compete",
        views: {
            "content@root": {
                templateUrl: "root/compete/_res/html/index.html",
                controller: "biddingCtrl"
            },"nav@root":{
                templateUrl: "root/compete/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});