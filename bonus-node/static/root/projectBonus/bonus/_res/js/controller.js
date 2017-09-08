var app = angular.module('bonus', [{
    files:[
        "root/projectBonus/bonus/_res/js/service.js",
    ]
}]);
app.controller('bonuCtrl',function ($scope,$state) {
    if ($state.current.url == '/bonus') {//默认加载列表
        $state.go('root.projectBonus.bonus.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('bonuMenuCtrl',function($scope,$state,$rootScope,$location,bonuSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass = $location.search().name + 'Menu';
        }

    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        bonuSer.bonuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.projectBonus.bonus.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.projectBonus.bonus.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.congeal = function(){
        if($scope.idListd){
            $state.go('root.projectBonus.bonus.list[12]',{id:$scope.idListd,name:'congeal'});
            $scope.menuClass = 'congealMenu';

        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
});
//自定义过滤
app.filter('cover1', function(){
    return function (val) {
        var result;
        switch(val){
            case false:
                result = "人工";
                break;
            case true:
                result = "系统";
                break;
        }
        return result;
    }
});
//自定义过滤
app.filter('cover2', function(){
    return function (val) {
        var result;
        switch(val){
            case false:
                result = "已冻结";
                break;
            case true:
                result = "未冻结";
                break;
        }
        return result;
    }
});