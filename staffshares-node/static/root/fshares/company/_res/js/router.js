var app = angular.module('company', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.fshares.company", {
        url : "/company",
        views : {
            "content@root.fshares" : {
                templateUrl : "root/fshares/company/_res/html/index.html",
                controller:"companyCtrl"
            },"menu@root.fshares" : {
                templateUrl : "root/fshares/company/_res/html/menu.html",
                controller:"companyMenuCtrl"
            }
        }
    }).state("root.fshares.company.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.fshares.company":{
                templateUrl : "root/fshares/company/list/_res/html/index.html",
                controller:'companyListCtrl'
            }
        }
    })
});