var app = angular.module('department', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.organize.management.department", {
        url : "/department",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/department/_res/html/index.html",
                controller:"departmentCtrl"
            },"menu@root.organize.management" : {
                templateUrl : "root/organize/management/department/_res/html/menu.html",
                controller:"departmentMenuCtrl"
            }
        }
    }).state("root.organize.management.department.add[12]", {
        url : "/add[12]",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/department/add/_res/html/index.html",
                controller:"departmentAddCtrl"
            }
        }
    }).state("root.organize.management.department.edit[12]", {
        url : "/edit[12]?id=",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/department/edit/_res/html/index.html",
                controller:"departmentEditCtrl"
            }
        }
    }).state("root.organize.management.department.joprange[12]", {
        url : "/joprange[12]?id=",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/department/joprange/_res/html/index.html",
                controller:"departmentJopCtrl"
            }
        }
    }).state("root.organize.management.department.views[12]", {
        url : "/views[12]?id=",
        views : {
            "content@root.organize.management" : {
                templateUrl : "root/organize/management/department/views/_res/html/index.html",
                controller:"departmentViewCtrl"
            }
        }
    })
});

