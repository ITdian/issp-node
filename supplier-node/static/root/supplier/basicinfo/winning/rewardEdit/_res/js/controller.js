var app = angular.module('rewardEdit', ['toastr','ipCookie']);
app.controller('rewardEditCtrl', function($scope, basicinfoSer,$state,toastr,$stateParams,ipCookie,$location){
    var rewardId2 = {id : $stateParams.subId};
    //获取值
    basicinfoSer.editRewardById(rewardId2).then(function(response){
        if(response.data.code==0){
            $scope.editInfo = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.rewardEditFun = function(){
        var vm = $scope;
        vm.editInfo.acquisition = angular.element('.acquisition').val();
        basicinfoSer.editRewardBasic(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.supplier.basicinfo.list');
                toastr.success( "已成功编辑", '温馨提示');
            }else if (response.data.code == 403||response.data.code == 401) {
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' })
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        });
    };
});