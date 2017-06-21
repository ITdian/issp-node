var app = angular.module('discussAdd', ['toastr']);
app.controller('discussAddCtrl', function($scope, discussSer,$state,toastr){

    //添加
    $scope.discussAddFun = function(){
        var vm = $scope;
        vm.talk.cooperTime = angular.element('.addTime').val();
        discussSer.addDiscuss(vm.talk).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.discussDetails.list');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error(response.data.msg,'温馨提示')
            }
        });

    };

});




