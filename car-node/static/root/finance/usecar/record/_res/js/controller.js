var app = angular.module('record', []);
app.controller('recordCtrl',function($scope,$state){

    if ($state.current.url == '/angle') {//默认加载列表
        $state.go('root.organize.management.angle.list')
    };



}).controller('recordMenuCtrl',function($scope,$state,$rootScope,$location){
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
            $state.go('root.organize.management.angle.edit[12]',{id:$scope.getId});
            $scope.menuClass='editMenu';
        }
    };
    //删除
    $scope.delete = function(){
        if($scope.getId){
            $state.go('root.organize.management.angle.list.delete[12]',{id:$scope.getId});
        }
    };
    //冻结
    $scope.congeal = function(){
        if($scope.getId){
            $state.go('root.organize.management.angle.list.congeal[12]',{id:$scope.getId});
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
});
//自定义过滤器
app.filter('cover', function(){
    return function(val){
        var result;
        switch(val){
            case "THAW":
                result = "解冻";
                break;
            case "CONGEAL":
                result = "冻结";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "NOACTIVE":
                result = "未激活";
                break;
            case "UNREVIEW":
                result = "未审核";
                break;
        }
        return result;
    }

});

