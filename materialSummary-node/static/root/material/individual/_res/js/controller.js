var app = angular.module('individual', [{
    files:[
        "root/material/individual/_res/js/service.js",
    ]
}]);
app.controller('indivCtrl',function ($scope,$state) {
    if ($state.current.url == '/individual') {//默认加载列表
        $state.go('root.material.individual.summaryDay[12]')
    }
    $scope.$emit('isVi',true);//判断是否出现搜索按钮
}).controller('indivMenuCtrl',function($scope,$state,$rootScope,$location,indivSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass=urlName+"Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='summaryDay[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'summaryDayMenu';
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
        indivSer.subsPermission(buttonName).then(function(response){
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
    $scope.summaryDay = function(){
        $scope.menuClass = 'summaryDayMenu';
        $scope.idListd = ''
    };
    $scope.summaryWeek = function(){
        $scope.menuClass = 'summaryWeekMenu';
        $scope.idListd = ''
    };
    $scope.summaryMonth = function(){
        $scope.menuClass = 'summaryMonthMenu';
        $scope.idListd = ''
    };
    $scope.summaryYear = function(){
        $scope.menuClass = 'summaryYearMenu';
        $scope.idListd = ''
    };
});
//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val){
            case false:
                result = "处罚";
                break;
            case true:
                result = "奖励";
                break;
        }
        return result;
    }
});