var app = angular.module('new', [{
    files:[
        "root/assessment/new/_res/js/service.js",
    ]
}]);
app.controller('newCtrl',function ($scope,$state) {
    if ($state.current.url == '/new') {//默认加载列表
        $state.go('root.assessment.new.list')
    }

}).controller('newMenuCtrl',function($scope,$state,$rootScope,$location,newSer){
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
    //菜单权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        newSer.menuPermission(buttonName).then(function(response){
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
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
});

//自定义过滤
app.filter('cover', function(){
    return function (val) {
        var result;
        switch(val) {
            case "LIST":
                result = "查看或列表";
                break;
            case "LESSFOUR":
                result = "4小时内";
                break;
            case "FORTOTWENTYFOR":
                result = "4至24小时";
                break;
            case "MORETWENTYFOR":
                result = "24小时以上";
                break;
            case "ONE":
                result = "一个部门";
                break;
            case "TWOORTHREE":
                result = "邮箱";
                break;
            case "WRITTEN":
                result = "二至三个部门";
                break;
            case "MORETHREE":
                result = "三个部门以上";
                break;
            case "PRIMARY":
                result = "初级";
                break;
            case "MIDDLE":
                result = "中级";
                break;
            case "URGENCY":
                result = "紧急";
                break;
            case "YES":
                result = "是";
                break;
            case "NOT":
                result = "否";
                break;
            case "DATUMRENEGE":
                result = "资料违约";
                break;
            case "PROJECTQUALITY":
                result = "工程质量违检违约";
                break;
            case "MANRENEGE":
                result = "人员违约";
                break;
            case "ANOTHER":
                result = "其他";
                break;
            case "GENERA":
                result = "一般";
                break;
            case "SEVERITY":
                result = "严重";
                break;
            case "ONLYONE":
                result = "仅允出现一次";
                break;
            case "FORBID":
                result = "禁止";
                break;


        }
        return result;
    }
});