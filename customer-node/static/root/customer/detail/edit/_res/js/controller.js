var app = angular.module('detailEdit', ['toastr','ipCookie']);
app.controller('detailEditCtrl', function($scope, $state,detailSer, toastr, $stateParams,ipCookie,$location){

    var cusNum = {customerNum : $stateParams.cusNum};

    detailSer.getInfoByCustomerNum(cusNum).then(function(response){
        if(response.data.code==0){
            $scope.details = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.tab={
        current: "_basic"
    }
    $scope.boardBtn=function(name){
        $scope.tab.current = name;
    }

    $scope.detailEditFun = function(){
        var vm = $scope;
        var data = {
            id:vm.details.id,
            customerNum : vm.details.customerNum,
            age : vm.details.age,
            birthday:angular.element('#birthdayEdit').val(),
            workExperience:vm.details.workExperience,
            studyExperience:vm.details.studyExperience,
            love:vm.details.love,
            characterEvaluation:vm.details.characterEvaluation
        }
        detailSer.editCustomerDetail(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.customer.detail.list');
                toastr.success("已编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        })
    };


});





