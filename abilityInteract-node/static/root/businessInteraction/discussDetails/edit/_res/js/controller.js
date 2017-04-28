var app = angular.module('discussEdit', ['toastr']);
app.controller('discussEditCtrl', function($scope, discussSer,$stateParams,$state,toastr){
    var discussData ={id: $stateParams.id};

    //获取ID
    discussSer.findDiscussId(discussData).then(function(response){
        if(response.data.code=='0'){
            $scope.editDiscuss = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑点击提交
    $scope.discussEditFun = function(){
        var vm = $scope;
        discussSer.editDiscuss(vm.editDiscuss).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.discussDetails.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});





