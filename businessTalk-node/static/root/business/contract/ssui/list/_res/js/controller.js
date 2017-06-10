var app = angular.module('ssuiList', ['ng-pagination','toastr']);
app.controller('ssuiListCtrl',function($scope,ssuiSer,toastr) {
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.marketserveLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.marketserveLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    
    function activatePage(page) {
        var listData = {
            page:page
        }
        ssuiSer.listMarketserve(listData).then(function(response){
            if(response.data.code==0){
                $scope.marketserveLists = response.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

        //搜索功能
        $scope.collect = function(){
            $scope.abili = {
                itemsCount: 12,//总条数
                take: 10,        //每页显示
                activatePage: activatePage, //当前页
            };
            var keywords = {
                communicateUser: $scope.communicateUser,
                communicateObj: $scope.communicateObj,
                communicateResult: $scope.communicateResult
            };
            ssuiSer.countBaseInfo(keywords).then(function (response) {
                if(response.data.code==0){
                    $scope.abili.itemsCount = response.data.data;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
            var data = {
                communicateUser: $scope.communicateUser,
                communicateObj: $scope.communicateObj,
                communicateResult: $scope.communicateResult,
                page: page
            };
            ssuiSer.listMarketserve(data).then(function(response){
                if(response.data.code == 0){
                    $scope.marketserveLists = response.data
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        };
    }
    $scope.abili = {
        itemsCount: 9, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    ssuiSer.countBaseInfo().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.marketserveLists.data,function(obj){
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