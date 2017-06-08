var app = angular.module('confirmList', ['ng-pagination','toastr']);
app.controller('confirmListCtrl',function($scope,confirmSer,toastr){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('iSsearch',function(event,newIs){
        $scope.isView = newIs;
    });
    function activatePage(page) {
        var listData = {
            page:page
        };
        confirmSer.resultList(listData).then(function(response){
            if(response.data.code==0){
                $scope.confirmLists = response.data.data
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
        //搜索功能
        $scope.collect = function(){
            $scope.custom = {
                itemsCount: 2, //总条数
                take: 10, //每页显示
                activatePage: activatePage
            };
            var keywords = {
                internalProjectName: $scope.internalProjectName,
                projectType: $scope.projectType,
                problemObject: $scope.problemObject
            };
            confirmSer.countResult(keywords).then(function (response) {
                if(response.data.code==0){
                    $scope.custom.itemsCount = response.data.data;
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
            var data = {
                internalProjectName: $scope.internalProjectName,
                projectType: $scope.projectType,
                problemObject: $scope.problemObject,
                page: page
            };
            confirmSer.searchList(data).then(function(response){
                if(response.data.code == 0){
                    $scope.confirmLists = response.data.data
                }else{
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        };
    }
    // 搜索功能字段
    $scope.titles = ['内部项目名称','工程类型','问题对象'];
    $scope.selectList = function(event){
        angular.forEach($scope.confirmLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.confirmLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.confirmLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    confirmSer.countResult().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    })

});

