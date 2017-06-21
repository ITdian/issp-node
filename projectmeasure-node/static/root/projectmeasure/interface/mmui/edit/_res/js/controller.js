var app = angular.module('mmuiyEdit', ['toastr']);
app.controller('mmuiEditCtrl', function($scope, mmuiSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    mmuiSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        $scope.data.profit = Number($scope.num).toFixed(2);//预计比重
        var data = $scope.data;
        mmuiSer.marketserveapplyEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.interface.mmui.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    }
    
});
   