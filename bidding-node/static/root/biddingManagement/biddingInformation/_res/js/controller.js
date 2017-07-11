var app = angular.module('biddingInformation', [{
    files:[
        "root/biddingManagement/biddingInformation/_res/js/service.js",
    ]
}]);
app.controller('informationCtrl',function ($scope,$state) {
    if ($state.current.url == '/biddingInformation') {//默认加载列表
        $state.go('root.biddingManagement.biddingInformation.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('infoMenuCtrl',function($scope,$state,$rootScope,$location,infoSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
//如果是刷新进来的页面，没有经过list
    if (window.location.href.split('id=')[1]) {
        $scope.idListd = window.location.href.split('id=')[1];
        $scope.menuClass = $location.search().name + 'Menu';

    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        infoSer.infoGuide(buttonName).then(function(response){
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
    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.biddingManagement.biddingInformation.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.biddingManagement.biddingInformation.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.upload = function(){
        if($scope.idListd){
            $state.go('root.biddingManagement.biddingInformation.upload[12]',{id:$scope.idListd});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.biddingManagement.biddingInformation.view[12]',{id:$scope.idListd});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.export = function(){
        $scope.menuClass = 'exportMenu'
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.summary = function(){
        $scope.menuClass = 'summaryMenu'
    };
});

//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val){
            case "INVITEDTENDERING":
                result = "邀请招标";
                break;
            case "OPENTENDERING":
                result = "公开招标";
                break;
            case "MOBILECOMMUNICATION":
                result = "移动通信";
                break;
            case "SOFTWAREDEVELOPMENT":
                result = "软件开发";
                break;
            case "INTELLIGENTSYSTEMINTEGRATION":
                result = "智能系统集成";
                break;
            case "PLANNINGMARKETINGSOLUTIONS":
                result = "策划与营销方案";
                break;
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
