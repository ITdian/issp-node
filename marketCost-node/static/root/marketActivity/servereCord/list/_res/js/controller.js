var app = angular.module('servereCordList', ['ng-pagination','toastr','ipCookie']);
app.controller('servereCordListCtrl',function($scope,servereCordSer,toastr,ipCookie,$location) {
    $scope.companySearchFun = function(){
        $scope.teamInfo = {};
    };
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.servereCordLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.servereCordLists.data,function(obj){
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
        servereCordSer.listservereCord(listData).then(function(response){
            if(response.data.code==0){
                $scope.servereCordLists = response.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    $scope.abili = {
        itemsCount: 9, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    servereCordSer.countBaseInfo().then(function(response){
        if(response.data.code == 0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //获取删除后的id，隐藏
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.servereCordLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
