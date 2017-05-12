var app = angular.module('standardCollect', ['toastr']);
app.controller('standardCollectCtrl', function($scope,$state,toastr,standardSer){

    $scope.search={};
    $scope.collect = function(){

        $scope.search.date=angular.element('.searchtime').val();
        standardSer.collectStandard($scope.search).then(function(response){
            console.info(response);
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }else if(response.data.code == 0&& !response.data.data){
                toastr.error( "汇总信息不存在", '温馨提示');
            }
        });
    };

    standardSer.collectStandard().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else if(response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }else if(response.data.code == 0&& !response.data.data){
            toastr.error( "汇总信息不存在", '温馨提示');
        }
    })
});





