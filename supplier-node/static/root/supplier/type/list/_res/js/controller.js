var app = angular.module('typeList', ['ng-pagination','toastr']);
app.controller('typeListCtrl',function($scope,typeSer,toastr) {
    $scope.$emit('changeId', null);
    //分页
    function activatePage(page) {
        var listData = {
            page:page
        };
        typeSer.listType(listData).then(function(response){
            if(response.data.code==0){
                $scope.typeLists = response.data
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 12, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    typeSer.countType().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });

    $scope.thaw = function(event){
        var data = {
            id :event.id
        };
        typeSer.thawType(data).then(function(response){
            if(response.data.code==0){
                event.status = "THAW"
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }

        })
    }
    //选择
    $scope.selectList = function(event){
        angular.forEach($scope.typeLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.typeLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.typeLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    //冻结
    $scope.$on('congealId',function(event,conid){
        angular.forEach($scope.typeLists.data,function(obj){
            if(obj.id == conid){
                obj.status = 'CONGEAL';
                obj._selectList = false;
            }
        })
    });
});
