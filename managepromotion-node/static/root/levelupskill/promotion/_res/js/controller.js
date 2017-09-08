var app = angular.module('promotion', [{
    files:[
        "root/levelupskill/promotion/_res/js/service.js",
        ]
}]);
app.controller('promoCtrl',function ($scope,$state) {
    if ($state.current.url == '/promotion') {//默认加载列表
        $state.go('root.levelupskill.promotion.list[12]')
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('promoMenuCtrl',function($scope,$state,$rootScope,$location,promoSer){
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
        promoSer.promoPermission(buttonName).then(function(response){
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
        $scope.page =$location.search().page;
    }
    $scope.comprehensive = function(){
        if($scope.idListd){
            $state.go('root.levelupskill.promotion.comprehensive[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'comprehensiveMenu'
        }
    };
    $scope.head = function(){
        if($scope.idListd){
            $state.go('root.levelupskill.promotion.head[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'headMenu'
        }
    };
    $scope.budget = function(){
        if($scope.idListd){
            $state.go('root.levelupskill.promotion.budget[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'budgetMenu'
        }
    };
    $scope.manager = function(){
        if($scope.idListd){
            $state.go('root.levelupskill.promotion.manager[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'managerMenu'
        }
    };
    $scope.planning = function(){
        if($scope.idListd){
            $state.go('root.levelupskill.promotion.planning[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'planningMenu'
        }
    };
    $scope.general = function(){
        if($scope.idListd){
            $state.go('root.levelupskill.promotion.general[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'generalMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    promoSer.promoPermission().then(function(response){
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
            case true:
                result = "主项";
                break;
            case false:
                result = "小项";
                break;
            case "AUDIT":
                result = "审核中";
                break;
            case "PASS":
                result = "通过";
                break;
            case "NOPASS":
                result = "不通过";
                break;
        }
        return result;
    }
});

//自定义过滤
app.filter('cov', function(){
    return function (val) {
        var result;
        switch(val){
            case true:
                result = "完成";
                break;
            case false:
                result = "未完成";
                break;
        }
        return result;
    }
});