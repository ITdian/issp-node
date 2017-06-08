var app = angular.module('messageList', ['ng-pagination','toastr']);
app.controller('messageListCtrl',function($scope,$stateParams,contactSer,toastr){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page,
            id : $stateParams.id
        };
        contactSer.MessageList(listData).then(function(response){
            if(response.data.code==0){

                $scope.messageInfo = response.data.data
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    }

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    contactSer.countMessage().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    })

});

