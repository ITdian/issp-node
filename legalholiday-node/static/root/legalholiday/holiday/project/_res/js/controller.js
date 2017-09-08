var app = angular.module('project', [{
    files:[
        "root/legalholiday/holiday/project/_res/js/service.js"
    ]
}]);
app.controller('projectCtrl',function ($scope,$state) {
    if ($state.current.url == '/project') {//默认加载列表
        $state.go('root.legalholiday.holiday.project.list');
    }
}).controller('projectMenuCtrl',function($scope,$state,$rootScope,$location,projectSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idList = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        projectSer.menuPermission(buttonName).then(function(response){
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
     //监听到父Ctrl后改变事件
    $scope.$on("selName", function(event, name){
        $scope.selName = name;
    });
    //分页
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    //关于删除
    $scope.delete = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.list[12]',{id:$scope.idList,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu'
        }
    };
    //编辑
    $scope.edit = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.edit[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu';
        $scope.idList = "";//清空选择的 id
    };
    //添加
    $scope.add = function(){
        $scope.menuClass = 'addMenu'
        $scope.idList = "";//清空选择的 id
    };
     //查看放假安排时间
    $scope.checkTime = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.checkTime[12]',{id:$scope.idList,page:$scope.page,num:$scope.selName});
            $scope.menuClass = 'checkTimeMenu'
        }
    };
    //查看  节假日工作安排
    $scope.checkPro = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.checkPro[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'checkProMenu'
        }
    };
    $scope.checkPeo = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.checkPeo[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'checkPeoMenu'
        }
    };
    $scope.checkGift = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.checkGift[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'checkGiftMenu'
        }
    };
     $scope.checkNotice = function(){
        if($scope.idList){
            $state.go('root.legalholiday.holiday.project.checkNotice[12]',{id:$scope.idList,page:$scope.page});
            $scope.menuClass = 'checkNoticeMenu'
        }
    };
});
