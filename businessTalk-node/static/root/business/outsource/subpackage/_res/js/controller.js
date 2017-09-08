var app = angular.module('subpackage', [{
    files:[
        "root/business/outsource/subpackage/_res/js/service.js"
    ]
}]);
app.controller('subpackageCtrl',function ($scope,$state) {
    if ($state.current.url == '/subpackage') {//默认加载列表
        $state.go('root.business.outsource.subpackage.list[12]');
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('subpackageMenuCtrl',function($scope,$state,$rootScope,$location,subpackageSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新

        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){

            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
    }
    //新增
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        subpackageSer.ssuiGuide(buttonName).then(function(response){
                
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
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
            $state.go('root.business.outsource.subpackage.list[12]',{id:$scope.idList,name:'delete'});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.business.outsource.subpackage.edit[12]',{id:$scope.idList});
            $scope.menuClass = 'editMenu'
        }
    };
    //上传
    $scope.upload = function(){
        if($scope.idList){
            $state.go('root.business.outsource.subpackage.upload[12]',{id:$scope.idList});
            $scope.menuClass = 'uploadMenu'
        }
    };
    //查看附件
    $scope.view = function(){
        if($scope.idList){
            $state.go('root.business.outsource.subpackage.view[12]',{id:$scope.idList});
            $scope.menuClass = 'viewMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    //添加市场
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
    };
    //汇总
    $scope.collect = function(){
        $scope.menuClass = 'collectMenu'
    };
    //导入
    $scope.import = function(){
        $scope.menuClass = 'importMenu'
    };
    //导出
    $scope.export = function(){
        $scope.menuClass = 'exportMenu'
    };
});