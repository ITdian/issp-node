var app = angular.module('repairList', ['ng-pagination','toastr']);
app.controller('repairListCtrl',function($scope,repairSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page || 1,
        };
        if($scope.repairLists) return;
        repairSer.countRepair(listData).then(function(response){
            if(response.data.code==0){
                $scope.custom.itemsCount = response.data.data;
                $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
        repairSer.repairList(listData).then(function(response){
            if(response.data.code==0){
                $scope.repairLists = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];
                    }
                    angular.forEach($scope.repairLists,function(obj){
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
    $scope.selectList = function(event){
        angular.forEach($scope.repairLists,function(obj){
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
        angular.forEach($scope.repairLists,function(obj){
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
        $state.go('root.deviceRepair.repairProject.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        repairSer.repairDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.deviceRepair.repairProject.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.deviceRepair.repairProject.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});

//自定义过滤器
app.filter('addCover',function(){
    return function(val){
        var result;
        switch(val){
            case "WAITING_REPAIR":
                result = "待维修";
                break;
            case "NORMALITY":
                result = "正常";
                break;
            case "SCRAPED":
                result = "已报废";
                break;
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }

});
app.filter('statusCover',function(){
    return function(val){
        var result;
        switch(val){
            case "UNAUDITED":
                result = "未审核";
                break;
            case "AUDITED":
                result = "审核通过";
                break;
            case "DENY":
                result = "审核不通过";
                break;
        }
        return result;
    }

});
app.filter('stateCover',function(){
    return function(val){
        var result;
        switch(val){
            case "UNAUDITED":
                result = "未审核";
                break;
            case "AUDITED":
                result = "审核通过";
                break;
            case "DENY":
                result = "审核不通过";
                break;
        }
        return result;
    }
});
app.filter('pay',function(){
    return function(val){
        var result;
        switch(val){
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }
});
app.filter('whetherCover',function(){
    return function(val){
        var result;
        switch(val){
            case true:
                result = "是";
                break;
            case false:
                result = "否";
                break;
        }
        return result;
    }
});