var app = angular.module('infoEdit', ['toastr']);
app.controller('infoEditCtrl', function($scope, infoSer,$stateParams,$state,toastr){
    var infoEdit ={id: $stateParams.id}
    //获取ID
    infoSer.findinfoId(infoEdit).then(function(response){
        if(response.data.code==0){
            $scope.inEdit = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.contentList = [{}];
    $scope.addtra = function(){
        var obj = {};
        $scope.inEdit.contentList.push(obj);
    }
    $scope.cleartra = function (index) {
        if(index == '0')return
        $scope.inEdit.contentList.splice(index,1);
    }
    //查询所有推荐要求
    infoSer.infofind().then(function(response){
        if(response.data.code == 0){
            $scope.reqSche = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //查询所有推荐考核内容
    infoSer.findAssess().then(function(response){
        if(response.data.code == 0){
            $scope.finda = response.data.data[0];
            for(var i = 0;i<$scope.contentList.length;i++) {
                var o = $scope.contentList[i];
                o.id=$scope.finda.id
            }
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //查询所有推荐内容
    infoSer.quireCon().then(function(response){
        if(response.data.code == 0){
            $scope.reCon = response.data.data;
            for(var i = 0;i<$scope.contentList.length;i++) {
                var o = $scope.contentList[i];
                o.id=$scope.reCon.id
            }
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //编辑
    $scope.infoEditFun = function(){
        var vm = $scope;
        var data={
            requireId:vm.inEdit.requireId,
            id:vm.inEdit.id
        };
        for(var i = 0;i<$scope.inEdit.contentList.length;i++){
            var o = $scope.inEdit.contentList[i];
            data['contentList['+i + ']' + '.content'] = o.content;
            data['contentList['+i + ']' + '.detail'] = o.detail;
            data['contentList['+i + ']' + '.id'] = o.id;
        }

        infoSer.infoEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.recommendinfo.list[12]');
                toastr.success("编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



