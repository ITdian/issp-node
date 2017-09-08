var app = angular.module('summaryStatus', ['toastr','angularjs-dropdown-multiselect']);
app.controller('summaryStatusCtrl', function($scope, promoedSer,toastr){
    //获取地区
    promoedSer.promoedGetStatus().then(function(response){
        if(response.data.code == 0){
            $scope.getStatus = response.data.data;
        } else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    $scope.collect = function(){
        var vm = $scope;
        vm.sum={
            status:$scope.status
        };
        promoedSer.promoedStatus(vm.sum).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }

//--------------------------配套多选的状态选项--------------------------
    // $scope.status = [];
    // $scope.stringSettings1 = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    // //获取地区
    // promoedSer.promoedGetStatus().then(function(response){
    //     if(response.data.code == 0){
    //         $scope.getStatus = response.data.data;
    //     } else{
    //         toastr.error(response.data.msg, '温馨提示');
    //     }
    // });
    // $scope.getSummary1 ={onSelectionChanged(){
    //     promoedSer.promoedStatus($scope.status).then(function(response){
    //         if(response.data.code == 0){
    //             $scope.summaryLists = response.data.data;
    //         }else{
    //             toastr.error( response.data.msg, '温馨提示');
    //         }
    //     })
    // }}



    // //获取地区
    // $scope.names = [];
    // $scope.stringSettings2 = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    // promoedSer.promoedGetNames().then(function(response){
    //     if(response.data.code == 0){
    //         $scope.getNames = response.data.data;
    //     } else{
    //         toastr.error(response.data.msg, '温馨提示');
    //     }
    // });
    // $scope.getSummary2 ={onSelectionChanged(){
    //     promoedSer.promoedName($scope.names).then(function(response){
    //         if(response.data.code == 0){
    //             $scope.summaryLists = response.data.data;
    //         }else{
    //             toastr.error( response.data.msg, '温馨提示');
    //         }
    //     })
    // }}


    // $scope.collect = function(){
    //     var data=$scope;
    //     data.vm={
    //         startTime:pro.startTime,
    //         endTime:pro.endTime
    //     }
    //     console.log(data.vm)
    //     promoedSer.promoedTimes(data.vm).then(function(response){
    //         if(response.data.code == 0){
    //             $scope.summaryLists = response.data.data;
    //         }else{
    //             toastr.error( response.data.msg, '温馨提示');
    //         }
    //     })
    // }
});





