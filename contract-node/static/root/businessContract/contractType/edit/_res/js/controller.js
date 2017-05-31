var app = angular.module('contractTypeEdit', ['toastr','ipCookie']);
app.controller('contractTypeEditCtrl', function($scope, contractSer,$stateParams,$state,toastr,$location,ipCookie){
    var basicData ={id: $stateParams.id};

    //获取ID
    contractSer.findContractId(basicData).then(function(response){
        if(response.data.code=='0'){
            $scope.editContract = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.contractEditFun = function(){
        var vm = $scope;
        contractSer.editContract(vm.editContract).then(function(response){
            console.log(response);
            if(response.data.code == 0){
                $state.go('root.businessContract.contractType.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    };
});





