var app = angular.module('projectEdit', ['toastr']);
app.controller('projectEditCtrl', function($scope, projectSer,$stateParams,$state,toastr){
    projectSer.allProjectPros().then(function(response){
        if(response.data.code == 0){
            $scope.proData = response.data.data;
        }
    });
    var proData ={id: $stateParams.id};
    //获取ID
    projectSer.findProjectId(proData).then(function(response){
        if(response.data.code=='0'){
            $scope.editInfo = response.data.data;
        }else if (response.data.code==403){
            toastr.error( "请登录用户", '温馨提示');
        }
    });
    //编辑点击提交
    $scope.proEditFun = function(){
        var vm = $scope;
        projectSer.editProject(vm.editInfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assessment.project.list');
                toastr.success( "编辑成功", '温馨提示');
            }else if(response.data.code == 403){
                toastr.error( "请登录用户", '温馨提示');
            }
        });
    };
    //可手填的下拉框
   /* $scope.changeSelect=function(){
        $scope.editInfo.area = $scope.editInfo.area2;
    };*/
});





