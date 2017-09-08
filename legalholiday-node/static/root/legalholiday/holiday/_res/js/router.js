var app = angular.module('holiday',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.legalholiday.holiday", {
        url: "/holiday",
        views: {
            "content@root.legalholiday": {
                templateUrl: "root/legalholiday/holiday/_res/html/index.html",
                controller: "holidayCtrl"
            }
        }
    })
})