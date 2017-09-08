var app = angular.module('repairProject', [{
    files:[
        "root/deviceRepair/repairProject/_res/js/service.js",
    ]
}]);
app.controller('deviceCtrl',function ($scope,$state) {
    if ($state.current.url == '/repairProject') {//默认加载列表
        $state.go('root.deviceRepair.repairProject.list[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('deviceMenuCtrl',function($scope,$state,$rootScope,$location,repairSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    //功能权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        repairSer.menuRepair(buttonName).then(function(response){
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
            $state.go('root.deviceRepair.repairProject.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu';
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.deviceRepair.repairProject.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.welfare = function(){
        if($scope.idListd){
            $state.go('root.deviceRepair.repairProject.welfare[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'welfareMenu';
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.pmAudit = function(){
        if($scope.idListd){
            $state.go('root.deviceRepair.repairProject.pmAudit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'pmAuditMenu'
        }
    };
    $scope.deviceScrap = function(){
        if($scope.idListd){
            $state.go('root.deviceRepair.repairProject.deviceScrap[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'deviceScrapMenu'
        }
    };
    $scope.fetchDevice = function(){
        if($scope.idListd){
            $state.go('root.deviceRepair.repairProject.fetchDevice[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'fetchDeviceMenu'
        }
    };
    $scope.uploadFile = function(){
        if($scope.idListd){
            $state.go('root.deviceRepair.repairProject.uploadFile[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'uploadMenu'
        }
    };
    $scope.view = function(){
        if($scope.idListd){
            $state.go('root.deviceRepair.repairProject.view[12]',{id:$scope.idListd,view:1,page:$scope.page});
            $scope.menuClass="viewMenu"
        }
    }
});
