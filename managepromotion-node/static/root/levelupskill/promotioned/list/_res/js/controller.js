var app = angular.module('promoedList', ['ng-pagination','toastr']);
app.controller('promoedListCtrl',function($scope,promoedSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    //删除
    //获取id
    
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('' +
            'root.levelupskill.promotioned.list[12]',{id:null,name:null});
    };
    var count=0;
    $scope.delFn = function(){//确认删除

        var data = {
            id:$stateParams.id
        };
        promoedSer.promoedDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.levelupskill.promotioned.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.levelupskill.promotioned.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //获取搜索字段
    $scope.name = $stateParams.names?$stateParams.names:'';
    $scope.startTimes = $stateParams.startTimes?$stateParams.startTimes:'';
    $scope.endTimes = $stateParams.endTimes?$stateParams.endTimes:'';
    $scope.status = $stateParams.status?$stateParams.status:'';
    if($stateParams.names || $stateParams.startTimes || $stateParams.endTimes || $stateParams.status){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //搜索
    $scope.collect = function(){
        $state.go('root.levelupskill.promotioned.list[12]',{names:$scope.name,startTimes:$scope.startTimes,endTimes:$scope.endTimes,status:$scope.status,page:1});
    }
    function activatePage(page) {
        var listData = {
            name: $scope.name || "",
            startTimes: $scope.startTimes || "",
            endTimes: $scope.endTimes || "",
            status: $scope.status || "",
            page:page || 1
        };
        
        promoedSer.promoedList(listData).then(function(response){
            if(response.data.code==0){
                $scope.promoedLists = response.data.data;

                if($stateParams.id){
                    angular.forEach($scope.promoedLists,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    // 搜索功能字段
    $scope.titles = ['姓名','开始时间','结束时间','状态'];
    $scope.selectList = function(event){
        
        angular.forEach($scope.promoedLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page',$location.search().page);
    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.promoedLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    promoedSer.promoedCount().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    })

});

