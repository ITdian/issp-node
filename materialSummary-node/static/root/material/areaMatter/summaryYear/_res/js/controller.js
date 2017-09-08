var app = angular.module('summaryYear', ['toastr']);
app.controller('summaryYearCtrl', function($scope, areaMSer,toastr){
    $scope.showed=true;
    // 获取项目名称
    areaMSer.rentArea().then(function(response){
        if(response.data.code == 0){
            $scope.areas = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 获取项目名称
    areaMSer.moneyGroup().then(function(response){
        if(response.data.code == 0){
            $scope.projects = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    // 获取绩效指标
    areaMSer.bonusStart().then(function(response){
        if(response.data.code == 0){
            $scope.targets = response.data.data;
        }else{
                toastr.error(response.data.msg,'温馨提示');
            }
    });
    $scope.collect = function(){
        var data = $scope;
         var start =  angular.element('.start').val();
         var end =  angular.element('.end').val();
        data.sum={
            area:data.area,
            project:data.project,
            target:data.target
        };
        data.sum.start=start;
        data.sum.end=end;
        console.log(data.sum)
        areaMSer.scoreSummary(data.sum).then(function(response){
            if(response.data.code == 0){
                $scope.areaMatterLists = response.data.data;
                console.log($scope.areaMatterLists)
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
});





