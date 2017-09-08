var app = angular.module('punishment', [{
    files:[
        "root/projectBonus/punishment/_res/js/service.js",
    ]
}]);
app.controller('punishCtrl',function ($scope,$state) {
    if ($state.current.url == '/punishment') {//默认加载列表
        $state.go('root.projectBonus.punishment.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('punishMenuCtrl',function($scope,$state,$rootScope,$location,punishSer){
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
        punishSer.punishPermission(buttonName).then(function(response){
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
            $state.go('root.projectBonus.punishment.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.projectBonus.punishment.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.summary = function(){
        $scope.menuClass = 'summaryMenu';
        $scope.idListd = ''
    };
    $scope.summaryReward = function(){
        $scope.menuClass = 'summaryRewardMenu';
        $scope.idListd = ''
    };
    $scope.summaryNumber = function(){
        $scope.menuClass = 'summaryNumberMenu';
        $scope.idListd = ''
    };
    $scope.summaryScore = function(){
        $scope.menuClass = 'summaryScoreMenu';
        $scope.idListd = ''
    };
});
//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val){
            case false:
                result = "处罚";
                break;
            case true:
                result = "奖励";
                break;
        }
        return result;
    }
});