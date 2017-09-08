var app = angular.module('business', [{
    files: ['root/business/_res/js/service.js']
}]);  
app.controller('businessCtrl', function ($scope,$state) {
    if ($state.current.url == '/business') {//默认加载列表
         $state.go('root.business.contract');
    }
    $scope.$on('changeId',function(event,msg){
        $scope.$broadcast('listId',msg)
    });
}).controller('navCtrl',function($scope,$state,$location,businesSer){
    $scope.navCla='ssui';
    var active = $location.path().split('/')[4];
    $scope.navCla=active?active:'ssui';
    $scope.navClass= function(name){
        $scope.navCla=name;
        $scope.$emit('isId',true);//每次切换页面更新搜索值
    }
    //-----------------------------新增-----------------------------
    businesSer.sonPermission().then(function(response){
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
    businesSer.setPermission().then(function(response){
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
    //-----------------------------end-----------------------------
    //菜单
    $scope.showsList = [
        {id:"1",item:"项目承包管理",menuList:[{name:'项目承包洽谈',msg:'ssui'}],showIs:true},
        {id:"2",item:"项目外包管理",menuList:[{name2:'项目外包洽谈',msg:'subpackage'}],showIs:true},
        {id:"3",item:"项目邮件发送",menuList:[{name3:'项目邮件发送',msg:'email'}],showIs:true},
        {id:"4",item:"设置",menuList:[{name4:'设置',msg:'setting'}],showIs:true},
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
//---------------------------------新增2---------------------------------
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