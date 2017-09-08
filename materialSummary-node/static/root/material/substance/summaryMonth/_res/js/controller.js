var app = angular.module('summaryMonth', ['toastr']);
app.controller('summaryMonthCtrl', function($scope, subsSer,toastr){
    $scope.showed=true;
   $scope.months=['1','2','3','4','5','6','7','8','9','10','11','12']
    $scope.collect = function(){
        var data = $scope;
        data.sum={
            year:data.year,
            month:data.month
        };
        
        subsSer.substanSummaryMonth(data.sum).then(function(response){
            if(response.data.code == 0){
                $scope.data = response.data.data;
                //----------------------主要的----------------------
                $scope.arr = [];
                var index = 0;
                var before = '';
                for(var i = 0;i < $scope.data.length;i++){
                    if (i == 0){
                        $scope.arr[index] = {};
                        $scope.arr[index].name = $scope.data[i].type;
                        $scope.arr[index].length = 1;
                    }
                    if(i !== 0){
                        if($scope.data[i].type == before){
                            $scope.arr[index].length +=1;
                        }else if($scope.data[i].type == '合计'){
                            $scope.data[i].area=' ';
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = '合计';
                            $scope.arr[index].length = 1;
                        }else if($scope.data[i].type != before){
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = $scope.data[i].type;
                            $scope.arr[index].length = 1;
                        }else{
                            index +=1;
                            $scope.arr[index] = {};
                            $scope.arr[index].name = 1;
                            $scope.arr[index].length = 1;
                        }
                    }
                    before = $scope.data[i].type;
                }
                for(var i=0;i<$scope.arr.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr[i].name=='' || typeof($scope.arr[i].name)=='undefined'){
                        $scope.arr[i-1].length+=$scope.arr[i].length;
                        $scope.arr.splice(i,1);
                        i=i-1;
                    }
                }
                //再次合并type
                $scope.arr3 = [];
                var index3 = 0;
                var before3 = '';
                for(var i = 0;i < $scope.arr.length;i++){
                    if (i == 0){
                        $scope.arr3[index3] = {};
                        $scope.arr3[index3].name3 = $scope.arr[i].name;
                        $scope.arr3[index3].length3 = $scope.arr[i].length;
                    }
                    if(i !== 0){
                        if($scope.arr[i].name == before3){
                            $scope.arr3[index3].length3 +=$scope.arr[i].length;;
                        }else if($scope.arr[i].name != before3){
                            index3 +=1;
                            $scope.arr3[index3] = {};
                            $scope.arr3[index3].name3 = $scope.arr[i].name;
                            $scope.arr3[index3].length3 = $scope.arr[i].length;;
                        }else{
                            index3 +=1;
                            $scope.arr3[index3] = {};
                            $scope.arr3[index3].name3 = 1;
                            $scope.arr3[index3].length3 = $scope.arr[i].length;;
                        }
                    }
                    before3 = $scope.arr[i].name;
                }
            //第二层
                $scope.arr2 = [];
                var index2 = 0;
                var before2 = '';
                for(var i = 0;i < $scope.data.length;i++){
                    if (i == 0){
                        $scope.arr2[index2] = {};
                        $scope.arr2[index2].name2 = $scope.data[i].area;
                        $scope.arr2[index2].length2 = 1;
                    }
                    if(i !== 0){
                        if($scope.data[i].area == before2){
                            $scope.arr2[index2].length2 +=1;
                        }else if($scope.data[i].area != before2){
                            index2 +=1;
                            $scope.arr2[index2] = {};
                            $scope.arr2[index2].name2 = $scope.data[i].area;
                            $scope.arr2[index2].length2 = 1;
                        }else{
                            index2 +=1;
                            $scope.arr2[index2] = {};
                            $scope.arr2[index2].name2 = 1;
                            $scope.arr2[index2].length2 = 1;
                        }
                    }
                    before2 = $scope.data[i].area;
                    // console.log(before2)
                }
                for(var i=0;i<$scope.arr2.length;i++){
                     //删除空白条件并把空白条件占用高度赋给它前一个值
                    if($scope.arr2[i].name2=='' || typeof($scope.arr2[i].name2)=='undefined'){
                        $scope.arr2[i-1].length2+=$scope.arr2[i].length2;
                        $scope.arr2.splice(i,1);
                        i=i-1;
                    }
                }
                // console.log($scope.arr2);
            }else{
                toastr.error(response.data.msg,'温馨提示');
            }
        })
    };
});





