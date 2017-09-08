var app = angular.module('checkTime', ['toastr']);
app.controller('checkTimeCtrl', function($scope, projectSer,$state,toastr,$stateParams){
    var checkTimeName = {name : $stateParams.num};
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.checkProList.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    //获取值
    function activatePage(page) {
        var listData = {
            page:page,
            name:checkTimeName.name
        }
        projectSer.checkTimeList(listData).then(function(response){
            if(response.data.code==0){
                $scope.checkTimeLists = response.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }
    
    $scope.project = {
        itemsCount: 9, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    projectSer.checkTimeCount(checkTimeName).then(function(response){
        if(response.data.code == 0){
            $scope.project.itemsCount = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
});
   