var app = angular.module('noticeList', ['ng-pagination','toastr']);
app.controller('noticeListCtrl',function($scope,noticeSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
            case 'congeal':
                $scope.congealShow = true;
                break;
        }
    }
    noticeSer.allNumbers().then(function(response){//获取所有编号
        if(response.data.code==0){
            $scope.allNumbers = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    noticeSer.getClass().then(function(response){//获取所有类别
        if(response.data.code==0){
            $scope.allClass = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    noticeSer.allAuthors().then(function(response){//获取所有作者
        if(response.data.code==0){
            $scope.allAuthors = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //获取搜索 
    $scope.numbers = $stateParams.numbers?$stateParams.numbers:'';
    $scope.classifys = $stateParams.classifys?$stateParams.classifys:'';
    $scope.authors = $stateParams.authors?$stateParams.authors:'';
    $scope.publishDate = $stateParams.publishDate?$stateParams.publishDate:'';
    if($stateParams.numbers || $scope.classifys || $scope.authors || $scope.publishDate){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //搜索
    $scope.search = function(){
        var publishDate = angular.element('.publishDate').val();
        $state.go('root.announcement.notice.list[12]',{numbers:$scope.numbers,classifys:$scope.classifys,authors:$scope.authors,publishDate:publishDate});
    }
    function activatePage(page) {
        var publishDate = angular.element('.publishDate').val() || $scope.publishDate;
        var listData = {
            page:page || 1,
            numbers:$scope.numbers || "",
            classifys:$scope.classifys || "",
            authors:$scope.authors || "",
            publishDate:$scope.publishDate || ""
        };
        noticeSer.countnotice(listData).then(function(response){
            if(response.data.code==0){
                $scope.custom.itemsCount = response.data.data;
                $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
        noticeSer.noticeList(listData).then(function(response){
            if(response.data.code==0){
                $scope.noticeLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.noticeLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    $scope.selectList = function(event){
        angular.forEach($scope.noticeLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.noticeLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

//分页 插件
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $scope.congealShow = false;
        $state.go('root.announcement.notice.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        noticeSer.deletenotice(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.announcement.notice.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.announcement.notice.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    $scope.conFn = function(){//确认冻结
        var data = {
            id:$stateParams.id
        };
        noticeSer.noticeCongel(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已冻结", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.congealShow = false;
                $state.go('root.announcement.notice.list[12]',{id:null,name:null});
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
    //解冻
    $scope.thaw = function(event){
        var data = {
            id :event.id
        };
        noticeSer.noticeThaw(data).then(function(response){
            if(response.data.code==0){
                event.status = "NORMAL"
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };
    $scope.titles = ['编号','分类','作者','发布日期'];
});
//自定义过滤器
app.filter('notice', function(){
    return function(val){
        var result;
        switch(val){
            case "FREEZE":
                result = "冻结";
                break;
            case "NORMAL":
                result = "正常";
                break;
        }
        return result;
    }

})
