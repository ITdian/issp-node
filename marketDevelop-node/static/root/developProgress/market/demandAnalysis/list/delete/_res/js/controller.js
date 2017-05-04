var app = angular.module('demandAnalysisDelete', ['toastr']);
app.controller('demandAnalysisDeleteCtrl',function($scope,demandAnalysisSer,toastr,$stateParams,$state){
    //删除
    $scope.delYes = function(){

        var data = {
            id :$stateParams.id
        }

        demandAnalysisSer.deleteDemand(data).then(function(response){
            if(response.data.code==0){
                toastr.info( "信息已删除", '温馨提示');
                $state.go('root.developProgress.market.demandAnalysis.list');
                $scope.deledId = $stateParams.id;
                //向父Ctrl传递事件
                $scope.$emit('deletedId', $scope.deledId)
                $scope.$emit('changeId', null);
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        })
    }


});


