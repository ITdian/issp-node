var app = angular.module('ssuiList', ['ng-pagination','toastr']);
app.controller('ssuiListCtrl',function($scope,ssuiSer,toastr,$state,$stateParams) {
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
            'root.business.contract.ssui.list[12]',{id:null,name:null});
    };
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        ssuiSer.marketserveapplyDel(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $scope.deledId = $stateParams.id;
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                $state.go('root.business.contract.ssui.list[12]',{id:null,name:null});
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
    $scope.communicateUser = $stateParams.communicateUser?$stateParams.communicateUser:'';
    $scope.communicateObj = $stateParams.communicateObj?$stateParams.communicateObj:'';
    $scope.communicateResult = $stateParams.communicateResult?$stateParams.communicateResult:'';
    if($stateParams.communicateUser || $stateParams.communicateObj || $stateParams.communicateResult){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //搜索功能
    $scope.collect = function(){
        $state.go('root.business.contract.ssui.list[12]',{communicateUser:$scope.communicateUser,communicateObj:$scope.communicateObj,communicateResult:$scope.communicateResult,page:1});
    };
    function activatePage(page) {
        var listData = {
            
            communicateUser:$scope.communicateUser || "",
            communicateObj:$scope.communicateObj || "",
            communicateResult:$scope.communicateResult || "",
            page:page || 1
        };
        
        ssuiSer.listMarketserve(listData).then(function(response){
            if(response.data.code==0){
                $scope.marketserveLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.marketserveLists,function(obj){
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
        ssuiSer.countBaseInfo(listData).then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    }
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.marketserveLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.marketserveLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.abili = {
        itemsCount: 9, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.marketserveLists,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    // 搜索功能
    $scope.titles = ['洽谈人','洽谈对象','项目结果'];
});
//自定义过滤器
app.filter('cov',function(){
    return function(val){
        var result;
        switch (val){
            case 'COOPERATE':
                result = "项目合作";
                break;
            case 'TRAIL':
                result = "项目跟进";
                break;
            case 'ABANDON':
                result = "项目丢弃";
                break;
        }
        return result;
    }
})