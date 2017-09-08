var app = angular.module('audit', ['toastr']);
app.controller('auditCtrl', function($scope, infoSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id};
    //获取ID
    infoSer.findinfoId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.goodAduit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.Audit = [{value:true,name:"是"},{value:false,name:"否"}];

    //采纳审核
    $scope.AuditFun = function(){
        var vm = $scope;
        vm.goodAduit.id = $stateParams.id;
        infoSer.auditinfo(vm.goodAduit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.recommendinfo.list[12]');
                toastr.success("已成功审核", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});
