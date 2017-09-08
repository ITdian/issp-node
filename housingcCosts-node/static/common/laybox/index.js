(function () {
    'use strict';

    angular
        .module('ng-laybox', [])
        .directive('laybox', ['$location','$window', laybox]);

    function laybox($location,$window) {
        return {
            restrict: 'E',
            scope: {
                'data': '=',
                'iw':'='
            },
            templateUrl: '/common/laybox/ng-laybox.html',
            link: function(scope, element) {
                scope.lists = scope.data.titles || [];
                scope.lists1 = scope.data.lists || [];
                scope.theme = scope.data.theme || '请填写主题';
                scope.height =(scope.data.style.height || 333) + 'px';
                scope.width = (scope.data.style.width || 665) + 'px';
                //点击关闭窗口
                scope.showFn = function(bol){
                    if(bol){
                        scope.iw = false;
                    }
                }
                var maxW = angular.element(window).width()-angular.element('.lay-box').width();
                var maxH = angular.element(window).height()-angular.element('.lay-box').height();
                angular.element('.lay-title').on('mousedown',function(e){
                    var t =e.clientY - angular.element('.lay-box').offset().top;
                    var l =e.clientX - angular.element('.lay-box').offset().left;
                    angular.element(window).on('mousemove',function(e){
                        var left = e.clientX-l>maxW? maxW:e.clientX-l;
                        var top = e.clientY-t>maxH? maxH :e.clientY-t;
                        angular.element('.lay-box').css({
                            'left':left +'px',
                            'top':top +'px'
                        })
                        return false;
                    })
                    return false;
                })
                angular.element(window).on('mouseup',function(){
                    angular.element(window).off('mousemove');
                })
            }
        }
    }
})();