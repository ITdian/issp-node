var app = angular.module('notice', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.announcement.notice", {
        url : "/notice",
        views : {
            "content@root.announcement" : {
                templateUrl : "root/announcement/notice/_res/html/index.html",
                controller:"noticeCtrl"
            },"menu@root.announcement" : {
                templateUrl : "root/announcement/notice/_res/html/menu.html",
                controller:"noticeMenuCtrl"
            }
        }
    }).state("root.announcement.notice.list[12]",{
        url:"/list[12]?id=&name=&page=&numbers=&classifys=&authors=&publishDate=",
        views:{
            "content@root.announcement.notice":{
                templateUrl : "root/announcement/notice/list/_res/html/index.html",
                controller:'noticeListCtrl'
            }
        }
    }).state("root.announcement.notice.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.announcement.notice":{
                templateUrl : "root/announcement/notice/add/_res/html/index.html",
                controller:'noticeAddCtrl'
            }
        }
    }).state("root.announcement.notice.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.announcement.notice":{
                templateUrl : "root/announcement/notice/edit/_res/html/index.html",
                controller:'noticeEditCtrl'
            }
        }
    })
});