var app = angular.module('centeTransact', ['ng-pagination','toastr']);
app.controller('centeTransactCtrl',function($scope,centeSer,toastr,$stateParams,$state,$location){
    var count=0;
    $scope.$emit('changeId', null);
    function activatePage(page) {
        if($scope.centeLists)return;
        var listData = {
            page:page || 1,
            id:$stateParams.id
        };
        centeSer.centeListId(listData).then(function(response){
            if(response.data.code==0){
                $scope.centeLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.centeLists,function(obj){
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
        angular.forEach($scope.centeLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd2 = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId2', $scope.idListd2);
        $scope.$emit('page',$location.search().page);
        //点击回收
        $scope.moreList2 = function(event){
            var data = {
                id:$scope.idListd2
            };
            centeSer.centeDelete(data).then(function(response){
                if(response.data.code==0){
                    count++;
                    toastr.info( "信息已删除", '温馨提示');
                    $scope.$emit('changeId', null);
                    $scope.delShow = false;
                    if(($scope.custom.itemsCount-count)%10){
                        $state.go('root.fshares.center.transact[12]',{id:null,name:null});
                    }else{
                        $state.go('root.fshares.center.transact[12]',{id:null,name:null,page:$stateParams.page-1});
                    }
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        };
    };
    
    //点击刷新
    $scope.moreList1 = function(event){
        $state.go('root.fshares.center.transact[12]');
    };

    //分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    centeSer.centeCountId().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    })

});

