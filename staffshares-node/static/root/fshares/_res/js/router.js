var app = angular.module('bidding',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.fshares", {
        url: "/fshares",
        views: {
            "content@root": {
                templateUrl: "root/fshares/_res/html/index.html",
                controller: "biddingCtrl"
            },"nav@root":{
                templateUrl: "root/fshares/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});