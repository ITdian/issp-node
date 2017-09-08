var app = angular.module('awardList', ['ng-pagination','toastr']);
app.controller('awardListCtrl',function($scope,awardSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page: page || 1,
        };
        if($scope.awardLi) return;
        awardSer.countinfo(listData).then(function (response) {
            if (response.data.code == 0) {
                $scope.custom.itemsCount = response.data.data;
                $scope.num = $location.search().page * 10 > 10 ? ($location.search().page - 1) * 10 : null;
            } else {
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    }
    $scope.selectList = function(event){
        angular.forEach($scope.awardLi,function(obj){
            obj._selectList = false
        });
        $scope.idListd = event.id;
        $scope.nameListd = event.getAward;
        if($scope.nameListd==undefined||$scope.nameListd==false){
            event._selectList = true;

            $scope.$emit('changeId', $scope.idListd);

        }
        //向父Ctrl传递事件
        $scope.$emit('changeName', $scope.getAward);
        $scope.$emit('page', $location.search().page);
    };
    awardSer.awardList().then(function(response){
        if(response.data.code==0){
            $scope.awardLi = response.data.data;

            if($stateParams.id){

                if($stateParams.id.indexOf('&')){
                    $stateParams.id = $stateParams.id.split('&')[0];
                }
            }

            //点击更多详细
            $scope.moreList = function(event){

                angular.forEach($scope.awardLi,function(obj){
                    if(event.id!==obj.id){
                        obj._moreList = false
                    }
                });
                event._moreList = !event._moreList;
            };
            //向父Ctrl传递事件
            $scope.$emit('changeId', $stateParams.id);

        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
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
        $state.go('root.recomManagement.awardinfo.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        awardSer.standDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.recomManagement.awardinfo.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.recomManagement.awardinfo.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

});
