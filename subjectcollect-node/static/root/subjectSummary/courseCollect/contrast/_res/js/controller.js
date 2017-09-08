var app = angular.module('courseCollectcontrast', ['toastr']);
app.controller('courseCollectContrastCtrl', function($scope, courseCollectSer,toastr){
$scope.months=['1','2','3','4','5','6','7','8','9','10','11','12']

    //查询事件
    $scope.collect = function(){
       var sum={
            a:$scope.monthsa,
            b:$scope.monthsb,
        };
        courseCollectSer.subjectsContrast(sum).then(function(response){
            
            if(response.data.code == 0){
                $scope.courseCollectLists = response.data.data;
                
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };

});




