var app = angular.module('promotioned', [{
    files:[
        "root/levelupskill/promotioned/_res/js/service.js",
        ]
}]);
app.controller('promoedCtrl',function ($scope,$state) {
    if ($state.current.url == '/promotioned') {//默认加载列表
        $state.go('root.levelupskill.promotioned.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('promoedMenuCtrl',function($scope,$state,$rootScope,$location,promoedSer){
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
        promoedSer.promoedPermission(buttonName).then(function(response){
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
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.levelupskill.promotioned.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.levelupskill.promotioned.edit[12]',{id:$scope.idListd,page:$scope.page});
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
    $scope.summaryStatus = function(){
        $scope.menuClass = 'summaryStatusMenu';
        $scope.idListd = ''
    };
    $scope.summaryNames = function(){
        $scope.menuClass = 'summaryNamesMenu';
        $scope.idListd = ''
    };
    $scope.summaryTimes = function(){
        $scope.menuClass = 'summaryTimesMenu';
        $scope.idListd = ''
    };
    promoedSer.promoedPermission().then(function(response){
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
            case "AUDIT":
                result = "审核中";
                break;
            case "PASS":
                result = "通过";
                break;
            case "NOPASS":
                result = "不通过";
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

