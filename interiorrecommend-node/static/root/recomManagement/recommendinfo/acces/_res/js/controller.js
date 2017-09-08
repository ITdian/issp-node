var app = angular.module('aotAcces', ['toastr']);
app.controller('aotAccesCtrl', function($scope, infoSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id};
    //获取ID
    infoSer.findinfoId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.inEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.Audit = [{value:true,name:"是"},{value:false,name:"否"}];

    //采纳审核
    $scope.accesFun = function(){
        var vm = $scope;
        vm.inEdit.id = $stateParams.id;
        infoSer.acceptinfo(vm.inEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.recommendinfo.list[12]');
                toastr.success("已成功审核", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});
