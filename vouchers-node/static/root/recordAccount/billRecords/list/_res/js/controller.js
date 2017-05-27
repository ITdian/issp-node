var app = angular.module('billRecordsList', ['ng-pagination','toastr']);
app.controller('billRecordsListCtrl',function($scope,billRecordsSer,toastr){

    function activatePage(page) {
        var listData = {
            page:page
        }
        billRecordsSer.listBillRecords(listData).then(function(response){
            if(response.data.code==0){
                $scope.recordsLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }

    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.recordsLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    billRecordsSer.countBillRecords().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    })

});

