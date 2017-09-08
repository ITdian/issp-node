var app = angular.module('schemeoperSug', ['toastr']);
var app = angular.module('schemeoperSug', ['toastr']);
app.controller('schemeoperSugCtrl', function($scope, schemeSer,$stateParams,$state,toastr){
    var schemeEdit ={id: $stateParams.id};

    //获取ID
    schemeSer.findRepairId(schemeEdit).then(function(response){
        if(response.data.code==0){
            $scope.schemeEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.cancel = function(){//取消
        $state.go('root.recomManagement.recomscheme.list[12]',{id:null,name:null});
    };
    //编辑点击确定
    $scope.schemeoperSugFun = function(){
        var vm = $scope;
        schemeSer.schemeoper(vm.schemeEdit).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.recomscheme.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





