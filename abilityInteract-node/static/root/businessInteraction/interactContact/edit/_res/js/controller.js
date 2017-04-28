var app = angular.module('contactEdit', ['toastr']);
app.controller('contactEditCtrl', function($scope, contactSer,$stateParams,$state,toastr){
    var interactData ={id: $stateParams.id};

    //获取ID
    contactSer.findInteractId(interactData).then(function(response){
        if(response.data.code=='0'){
            $scope.editConact = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }

    });


    //编辑点击提交
    $scope.conactEditFun = function(){
        var vm = $scope;
        contactSer.editInteract(vm.editConact).then(function(response){
            if(response.data.code == 0){
                $state.go('root.businessInteraction.interactContact.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });

    };
});





