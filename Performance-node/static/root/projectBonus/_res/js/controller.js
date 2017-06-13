var app = angular.module('projectBonus', []);
app.controller('projectBonusCtrl', function ($scope,$state) {
    if ($state.current.url == '/projectBonus') {//默认加载列表
         $state.go('root.projectBonus.bonus');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location){
    $scope.navCla='bonus';
    var active = $location.path().split('/')[3];
    $scope.navCla=active?active:'bonus';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
    //菜单导航
    angular.element('.big').click(function(){
        angular.element(this).siblings('h3').find('i').addClass('change-angle').end().next().hide();
        angular.element(this).next().toggle().end().find('i').toggleClass('change-angle');
    })
    angular.element('.big').eq(0).trigger("click");//添加一个默认点击事件
})

