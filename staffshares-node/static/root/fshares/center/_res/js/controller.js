var app = angular.module('center', [{
    files:[
        "root/fshares/center/_res/js/service.js",
    ]
}]);
app.controller('centeCtrl',function ($scope,$state) {
    if ($state.current.url == '/center') {//默认加载列表
        $state.go('root.fshares.center.list[12]')
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('centeMenuCtrl',function($scope,$state,$rootScope,$location,centeSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    //新增
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){
            $scope.menuClass =$location.search().name + 'Menu';
        }
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        centeSer.centePermission(buttonName).then(function(response){
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
    $scope.$on("getId2", function(event, msg){
       $scope.idListd2 = msg;
    });

    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page =$location.search().page;
    }
    $scope.apply = function(){
        if($scope.idListd){
            $state.go('root.fshares.center.apply[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'applyMenu';
            $scope.idListd2='';
        }
    };
    $scope.transact = function(){
        if($scope.idListd){
            $state.go('root.fshares.center.transact[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'transactMenu';
            $scope.idListd2='';
        }
    };
    $scope.buy = function(){
        if($scope.idListd2){
            $state.go('root.fshares.center.buy[12]',{id:$scope.idListd2,page:$scope.page});
            $scope.menuClass = 'buyMenu'
        }
    };
    $scope.sold = function(){
        if($scope.idListd2){
            $state.go('root.fshares.center.sold[12]',{id:$scope.idListd2,page:$scope.page});
            $scope.menuClass = 'soldMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idListd2='';
    };
    centeSer.centePermission().then(function(response){
        if(response.data.code == 0){
            var data = response.data.data;
            if(data && data.length){
                $scope.isHide = false;
                for(var i =0,len=data.length;i<len;i++){
                    var obj = data[i];
                    $scope[obj.name]=obj.flag;
                }
            }else if(response.data.data.length == 0){
                $scope.isHide = true;
            }
        }else{
            $scope.isHide = false;
        }
    });
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

