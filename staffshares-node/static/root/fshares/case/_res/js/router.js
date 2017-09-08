var app = angular.module('case', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.fshares.case", {
        url : "/case",
        views : {
            "content@root.fshares" : {
                templateUrl : "root/fshares/case/_res/html/index.html",
                controller:"caseCtrl"
            },"menu@root.fshares" : {
                templateUrl : "root/fshares/case/_res/html/menu.html",
                controller:"caseMenuCtrl"
            }
        }
    }).state("root.fshares.case.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.fshares.case":{
                templateUrl : "root/fshares/case/list/_res/html/index.html",
                controller:'caseListCtrl'
            }
        }
    }).state("root.fshares.case.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.fshares.case":{
                templateUrl : "root/fshares/case/edit/_res/html/index.html",
                controller:'webEditCtrl'
            }
        }
    })
});