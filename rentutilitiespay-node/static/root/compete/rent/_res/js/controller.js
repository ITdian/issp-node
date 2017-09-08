var app = angular.module('rent', [{
    files:[
        "root/compete/rent/_res/js/service.js",
    ]
}]);
app.controller('rentCtrl',function ($scope,$state) {
    if ($state.current.url == '/rent') {//默认加载列表
        $state.go('root.compete.rent.list[12]')
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('rentMenuCtrl',function($scope,$state,$rootScope,$location,rentSer){
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
        rentSer.rentPermission(buttonName).then(function(response){
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
            $state.go('root.compete.rent.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    }

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.compete.rent.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    }
    $scope.financial = function(){
        if($scope.idListd){
            $state.go('root.compete.rent.financial[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'financialMenu'
        }
    }
    $scope.upload = function(){
        if($scope.idListd){
            $state.go('root.compete.rent.upload[12]',{id:$scope.idListd});
            $scope.menuClass = 'uploadMenu'
        }
    }
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.compete.rent.view[12]',{id:$scope.idListd});
            $scope.menuClass = 'viewMenu'
        }
    }
    $scope.summary = function(){
        $scope.menuClass = 'summaryMenu'
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
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val){
            case false:
                result = "是";
                break;
            case true:
                result = "否";
                break;
        }
        return result;
    }
});