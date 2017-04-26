var app = angular.module('demandAnalysisAdd', ['toastr']);
app.controller('demandAnalysisAddCtrl', function($scope, demandAnalysisSer,$state,toastr){

    //添加
    $scope.analysisAddFun = function(){
        var vm = $scope;
        demandAnalysisSer.addDemand(vm.demand).then(function(response){
            if(response.data.code == 0){
                $state.go('root.developProgress.market.demandAnalysis.list');
                toastr.success("已成功添加", '温馨提示');
            }else if(response.data.code==403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };

});




