var app = angular.module('subscription', [{
    files:[
        "root/fshares/subscription/_res/js/service.js",
    ]
}]);
app.controller('subscripCtrl',function ($scope,$state) {
    if ($state.current.url == '/subscription') {//默认加载列表
        $state.go('root.fshares.subscription.list[12]')
    }
    $scope.$emit('isVi',false);//判断是否出现搜索按钮
}).controller('subscripMenuCtrl',function($scope,$state,$rootScope,$location,subscripSer){
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
        subscripSer.subscripPermission(buttonName).then(function(response){
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
            $state.go('root.fshares.subscription.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.fshares.subscription.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.audit = function(){
        if($scope.idListd){
            $state.go('root.fshares.subscription.audit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'auditMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    subscripSer.subscripPermission().then(function(response){
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
app.filter('cover2', function(){
    return function (val) {
        var result;
        switch(val){
            case "SUBMIT":
                result = "已提交待审核";
                break;
            case "EXAMINE":
                result = "审核通过待支付流程";
                break;
            case "DELETE":
                result = "删除";
                break;
            case "NOEXAMINE":
                result = "审核不通过购买失败";
                break;
            case "ISSUED":
                result = "购买成功";
                break;
        }
        return result;
    }
});

