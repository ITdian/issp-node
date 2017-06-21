var app = angular.module('costCollectPro', ['toastr']);
app.controller('costCollectProCtrl', function($scope,$state,toastr,costSer){
    //查询所有年份
    costSer.listCostById().then(function(response){
        if(response.data.code == 0){
            $scope.yeardata = response.data.data;
        }
    });
    costSer.listCostById2().then(function(response){
        if(response.data.code == 0){
            $scope.monthdata = response.data.data;
        }
    });
    $scope.collect = function(){
        var data = {
            year: $scope.year,
            month: $scope.month,
        };
        costSer.collectProject(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
    //选择
    $scope.$emit('changeSocialListId', null);
    $scope.selectList = function(event){
        angular.forEach($scope.summaryLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idSocialList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeSocialListId',$scope.idSocialList);
    };
});





