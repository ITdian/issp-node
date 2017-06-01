var app = angular.module('signingProject', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.businessContract.signingProject", {
        url : "/signingProject",
        views : {
            "content@root.businessContract" : {
                templateUrl : "root/businessContract/signingProject/_res/html/index.html",
                controller:"signingCtrl"
            },"menu@root.businessContract" : {
                templateUrl : "root/businessContract/signingProject/_res/html/menu.html",
                controller:"signingMenuCtrl"
            }
        }
    }).state("root.businessContract.signingProject.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.businessContract.signingProject":{
                templateUrl : "root/businessContract/signingProject/add/_res/html/index.html",
                controller:'signingAddCtrl'
            }
        }
    }).state("root.businessContract.signingProject.edit[12]",{
        url:"/edit[12]?id=",
        views:{
            "content@root.businessContract.signingProject":{
                templateUrl : "root/businessContract/signingProject/edit/_res/html/index.html",
                controller:'signingEditCtrl'
            }
        }
    }).state("root.businessContract.signingProject.review[12]",{
        url:"/review[12]?id=",
        views:{
            "content@root.businessContract.signingProject":{
                templateUrl : "root/businessContract/signingProject/review/_res/html/index.html",
                controller:'signingReviewCtrl'
            }
        }
    })
});