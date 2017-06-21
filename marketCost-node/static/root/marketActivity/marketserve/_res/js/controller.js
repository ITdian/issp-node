var app = angular.module('marketserve', [{
    files:[
        "root/marketActivity/marketserve/_res/js/service.js"
    ]
}]);
app.controller('marketserveCtrl',function ($scope,$state) {
    if ($state.current.url == '/marketserve') {//默认加载列表
        $state.go('root.marketActivity.marketserve.list');
    }
}).controller('marketserveMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("listId", function(event, id){
        $scope.idList = id;
    });
    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.marketActivity.marketserve.list.delete[12]',{id:$scope.idList});
            $scope.menuClass = 'deleteMenu';
            $scope.idList = '';
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.marketActivity.marketserve.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
            $scope.idList = '';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
        $scope.idList = '';
    };
    //添加市场
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    //添加客户信息
    $scope.addcustomer = function(){
        if($scope.idList){
            $state.go('root.marketActivity.marketserve.addcustomer[12]',{id:$scope.idList});
            $scope.menuClass = 'addcustomerMenu';
            $scope.idList = '';
        }
    };
    //编辑 市场招待信息
    $scope.organize = function(){
        if($scope.idList){
             $state.go('root.marketActivity.marketserve.organize[12]',{id:$scope.idList});
            $scope.menuClass = 'organizeMenu';
            $scope.idList = '';
        }
    }
    //编辑 决策层审核信息
    $scope.executiveOpinion = function(){
        if($scope.idList){
             $state.go('root.marketActivity.marketserve.executiveOpinion[12]',{id:$scope.idList});
            $scope.menuClass = 'executiveOpinionMenu';
            $scope.idList = '';
        }
    }
    //查看客户信息列表
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.marketActivity.marketserve.view[12]',{id:$scope.idList});
            $scope.menuClass = 'viewMenu';
            $scope.idList = '';
        }
    }
});

