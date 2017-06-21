var app = angular.module('taxInfoSummaryTax', ['toastr']);
app.controller('taxInfoSummaryTaxCtrl', function($scope,$state,toastr,taxInfoSer){
    //查询所有税种
    taxInfoSer.listResultProjectTax().then(function(response){
          if(response.data.code == 0){
            $scope.taxdata = response.data.data;
          }
    });
    $scope.collect = function(){
        var data = {
            taxType: $scope.taxType,
            startTime:angular.element('.startTime').val(),
            endTime:angular.element('.endTime').val()
        };
        taxInfoSer.projectTax(data).then(function(response){
            if(response.data.code == 0&&response.data.data){
                $scope.summaryLists = response.data.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
    };
//无参数传入
    taxInfoSer.projectTax().then(function(response){
        if(response.data.code == 0&&response.data.data){
            $scope.summaryLists = response.data.data
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    })
});


