var app = angular.module('legalholiday', [{
    files: ['root/legalholiday/_res/js/service.js']
}]);
app.controller('legalholidayCtrl', function ($scope,$state) {
    if ($state.current.url == '/legalholiday') {//默认加载列表
         $state.go('root.legalholiday.holiday');
    }
    //父 Ctrl 监听到事件，向下广播
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg);
    });
    $scope.$on('changeName',function(event,Newname){
        $scope.$broadcast('selName',Newname);
    })
}).controller('navCtrl',function($scope,$state,$location,legalholidaySer){
    $scope.navCla='gift';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'gift';
    $scope.navClass= function(name){
        $scope.navCla=name
    }
    
    //权限
    legalholidaySer.navPermission().then(function(response){
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
    legalholidaySer.setPermission().then(function(response){
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
    //下拉菜单
    $scope.showsList = [
        {id:"1",item:"法定节假日",menuList:[{name:'节假日礼品标准'},{name2:'公司放假时间安排'},{name3:'法定节假日放假方案'}],showIs:false},
        {id:"2",item:"设置",menuList:[{name4:'设置'}],showIs:false},
        {id:"3",item:"版本信息",menuList:[{name5:'版本信息'},{name6:'帮助与解答'}],showIs:false},
    ];
    $scope.showMenu = function(obj,event) {
        if(event){
            if(obj.showIs){
                obj.showIs=!event;
            }else{
                obj.showIs=event;
                this.showsList.forEach(function(item){
                    if(item.id!=obj.id){
                        item.showIs=!event;
                    }else{
                        item.showIs=event;
                    }
                });
            }
        }
    };

});
app.directive('mod',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.hover(function(){
                var textWidth = elements.text().length*12;
                var boxWidth = elements.width();

                if(textWidth>boxWidth){
                    elements.addClass('modac');
                }
            });
            elements.dblclick(function(){
                if(elements.hasClass('modac')){
                    $('.module').show();
                    var Index =  elements.index(),
                        title,
                        tag = this.tagName;
                    if(tag=="P"){
                        title =  $(".list-head span").eq(Index).text();
                    }else if(tag=="SPAN"){
                        title = $(this).parent().siblings('.see-parent').children().eq(Index).text();
                    }
                    var conText = elements.text();
                    $('.see-type').text(title);
                    $('.see-description').text(conText)
                }

            })
        }
    }
}).directive('modclose',function(){
    return{
        restrict:'AE',
        replace:true,
        link:function(scope,elements,attrs){
            elements.on("click",function(){
                $('.module').hide();
            });

        }
    }
});