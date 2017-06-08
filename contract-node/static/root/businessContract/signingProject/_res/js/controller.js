var app = angular.module('signingProject', [{
    files:[
        "root/businessContract/signingProject/_res/js/service.js",
    ]
}]);
app.controller('signingCtrl',function ($scope,$state) {
    if ($state.current.url == '/signingProject') {//默认加载列表
        $state.go('root.businessContract.signingProject.list')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('signingMenuCtrl',function($scope,$state,$rootScope,$location){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list'){
            $scope.menuClass = 'listMenu';
        }
    });
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
       $scope.idListd = msg;
    });
    $scope.$on("onSearch", function(event, name){
        $scope.onSearch = name;
    });
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.businessContract.signingProject.list.delete[12]',{id:$scope.idListd});
            $scope.menuClass = 'deleteMenu'
        }
    };

    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.businessContract.signingProject.edit[12]',{id:$scope.idListd});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.review = function(){
        if($scope.idListd){
            $state.go('root.businessContract.signingProject.review[12]',{id:$scope.idListd});
            $scope.menuClass = 'reviewMenu';
            $scope.idListd = "";

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
app.filter('cover',function(){
   return function(val){
       var result;
       switch(val){
           case "MOBILECOMMUNICATION":
               result = "移动通信类";
               break;
           case "SOFTDEVELOP":
               result = "软件开发类";
               break;
           case "INTELLIGENCESYSTEM":
               result = "智能系统集成类";
               break;
           case "ADVERT":
               result = "广告策划营销类";
               break;
           case "RENTCONTRACT":
               result = "租赁合同";
               break;
           case "CHARCONTRACT":
               result = "承包的项目合同";
               break;
           case "DISTRIBUTECONTRACT":
               result = "分包项目合同";
               break;
           case "SALECONTRACT":
               result = "销售合同";
               break;
           case "FRAMECONTRACT":
               result = "框架合同";
               break;
           case "SINGLECONTRACT":
               result = "单次合同";
               break;
       }
       return result;
   }

});