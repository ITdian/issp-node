var app = angular.module('increList', ['ng-pagination','toastr']);
app.controller('increListCtrl',function($scope,increSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    //删除
    //获取id
    
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
            case 'manager':
                $scope.manShow = true;
                break;
            case 'head':
                $scope.headShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('' +
            'root.insurance.increase.list[12]',{id:null,name:null});
    };
    var count=0;
    $scope.delFn = function(){//确认删除

        var data = {
            id:$stateParams.id
        };
        increSer.increDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.insurance.increase.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.insurance.increase.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

    //----------------------总经办审核----------------------
    $scope.mancel = function(){//取消
        $scope.manShow = false;
        $state.go('' +
            'root.insurance.increase.list[12]',{id:null,name:null});
    };
    var count=0;
    $scope.manFn = function(){//确认新增

        var data = {
            id:$stateParams.id,
            send:'true'
        };
        increSer.increManager(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "确认新增", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.manShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.insurance.increase.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.insurance.increase.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    //-----------------------社保管理负责人审核-----------------------
    $scope.headcel = function(){//取消
        $scope.headShow = false;
        $state.go('' +
            'root.insurance.increase.list[12]',{id:null,name:null});
    };
    var count=0;
    $scope.headFn = function(){//确认增员

        var data = {
            id:$stateParams.id
        };
        increSer.increHead(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "确认增员", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.headShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.insurance.increase.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.insurance.increase.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
    function activatePage(page) {
        if($scope.increLists)return;
        var listData = {
            page:page || 1
        };
        increSer.increList(listData).then(function(response){
            if(response.data.code==0){
                $scope.increLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.increLists,function(obj){
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
        angular.forEach($scope.increLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page',$location.search().page);
    };


//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    increSer.increCount().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    })
    //查询更多
    $scope.moreList = function(event){
        angular.forEach($scope.increLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
});

