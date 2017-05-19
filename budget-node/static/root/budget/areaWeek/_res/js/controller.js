var app = angular.module('areaWeek', [{
    files:[
        "root/budget/areaWeek/_res/js/service.js"
    ]
}]);
app.controller('areaWeekCtrl',function ($scope,$state) {

    if ($state.current.url == '/areaWeek') {//默认加载列表
        $state.go('root.budget.areaWeek.list')
    }

}).controller('areaWeekMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    $scope.$on("passId",function(event,id){
        $scope.getId = id;
    });
    //编辑
    $scope.edit = function(){
        if($scope.getId){
            $state.go('root.budget.areaWeek.edit[12]',{id:$scope.getId});
            $scope.menuClass='editMenu';
        }
    };
    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.budget.areaWeek.list.delete[12]',{id:$scope.getId});
            $scope.menuClass='deleteMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu'
    };
});


