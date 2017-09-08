var app = angular.module('requireEdit', ['toastr']);
app.controller('requireEditCtrl', function($scope, requireSer,$stateParams,$state,toastr){
    var requireEdit ={id: $stateParams.id}
    //获取ID
    requireSer.findRepairId(requireEdit).then(function(response){
        if(response.data.code==0){
            $scope.reqEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.detailList = [{}];
    $scope.addtra = function(){
        var obj = {};
        $scope.reqEdit.detailList.push(obj);
    }
    $scope.cleartra = function (index) {
        if(index == '0')return
        $scope.reqEdit.detailList.splice(index,1);
    }
    //查询所有推荐方案
    requireSer.requireScheme().then(function(response){
        var vm = $scope;
        if(response.data.code == 0){
            $scope.reqSche = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //查询所有推荐类型
    requireSer.requireType().then(function(response){
        var vm = $scope;
        if(response.data.code == 0){
            $scope.reqType = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //编辑点击提交
    $scope.requireEditFun = function(){
        var vm = $scope;
        var data={
            recommendSchemeId:vm.reqEdit.recommendSchemeId,
            recommendTypeId:vm.reqEdit.recommendTypeId,
            indicatorResource:vm.reqEdit.indicatorResource,
            assessWay:vm.reqEdit.assessWay,
            recommendWay:vm.reqEdit.recommendWay,
            recommendSponsor:vm.reqEdit.recommendSponsor,
            recommendTime:vm.reqEdit.recommendTime,
            id:vm.reqEdit.id
        }
        for(var i = 0;i<$scope.reqEdit.detailList.length;i++){
            var o = $scope.reqEdit.detailList[i];
            data['detailList['+i + ']' + '.content'] = o.content;
            data['detailList['+i + ']' + '.require'] = o.require;
            data['detailList['+i + ']' + '.id'] = o.id;
        }

        requireSer.editrequire(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.recommendrequire.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});
