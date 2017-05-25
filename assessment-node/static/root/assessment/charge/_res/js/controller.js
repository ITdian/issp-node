var app = angular.module('charge', [{
    files:[
        "root/assessment/charge/_res/js/service.js",
    ]
}]);
app.controller('chargeCtrl',function ($scope,$state) {
    if ($state.current.url == '/charge') {//默认加载列表
        $state.go('root.assessment.charge.list')
    }

}).controller('chargeMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });

    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.assessment.charge.list.delete[12]',{id:$scope.idListd});
            $scope.menuClass = 'deleteMenu'
        }
    }
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.assessment.charge.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    }
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});

//自定义过滤
/*app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val) {
            case "LONGTERM":
                result = "合作方式";
                break;
            case "ITEM":
                result = "事项合作";
                break;
            case "AGENCY":
                result = "中介合作";
                break;
            case "ANOTHER":
                result = "其他";
                break;
        }
        return result;
    }
});*/
