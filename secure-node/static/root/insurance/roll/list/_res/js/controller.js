var app = angular.module('rollList', ['ng-pagination','toastr']);
app.controller('rollListCtrl',function($scope,rollSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    //删除
    //获取id
    
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
            case 'audit':
                $scope.audShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('' +
            'root.insurance.roll.list[12]',{id:null,name:null});
    };
    var count=0;
    $scope.delFn = function(){//确认删除

        var data = {
            id:$stateParams.id
        };
        rollSer.rollDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.insurance.roll.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.insurance.roll.list[12]',{id:null,name:null,page:$stateParams.page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

    //----------------------------------
    $scope.audcel = function(){//取消
        $scope.audShow = false;
        $state.go('' +
            'root.insurance.roll.list[12]',{id:null,name:null});
    };
    $scope.audFn = function(){//确认

        var data = {
            id:$stateParams.id
        };
        rollSer.rollAudit(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "已减员", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.audShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.insurance.roll.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.insurance.roll.list[12]',{id:null,name:null,page:$stateParams.page-1});
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
    $scope.removeName = $stateParams.removeName?$stateParams.removeName:'';
    $scope.employeeId = $stateParams.employeeId?$stateParams.employeeId:'';
    if($stateParams.removeName || $stateParams.employeeId){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //搜索
    $scope.collect = function(){
        $state.go('root.insurance.roll.list[12]',{removeName:$scope.removeName,employeeId:$scope.employeeId,page:1});
    }
    function activatePage(page) {
        if($scope.rollLists)return;
        var listData = {
            removeName: $scope.removeName || " ",
            employeeId: $scope.employeeId || " ",
            page:page || 1
        };
        rollSer.rollList(listData).then(function(response){
            if(response.data.code==0){
                $scope.rollLists = response.data.data;
                if($stateParams.id){
                    angular.forEach($scope.rollLists,function(obj){
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
    $scope.titles = ['减员的人员姓名','员工编号'];
    $scope.selectList = function(event){
        angular.forEach($scope.rollLists,function(obj){
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

    rollSer.rollCount().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
            $scope.num = $stateParams.page*10>10?($stateParams.page-1)*10:null;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    })
    //查询更多
    $scope.moreList = function(event){
        angular.forEach($scope.rollLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
});

