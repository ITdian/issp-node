var app = angular.module('infoAdd', ['toastr']);
app.controller('infoAddCtrl', function($scope, infoSer,$state,toastr){
    $scope.contentList = [{}];
    $scope.addtra = function(){
        var obj = {};
        $scope.contentList.push(obj);
    }
    $scope.cleartra = function (index) {
        if(index == '0')return
        $scope.contentList.splice(index,1);
    }
    //查询所有推荐要求
    infoSer.infofind().then(function(response){
        if(response.data.code == 0){
            $scope.reqSche = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //添加
    $scope.infoAddFun = function(){
        var vm = $scope;
        for(var i = 0;i<$scope.contentList.length;i++){
            var o = $scope.contentList[i];
            vm.addfo['contentList['+i + ']' + '.content'] = o.content;
            vm.addfo['contentList['+i + ']' + '.detail'] = o.detail;
        }
        infoSer.addinfo(vm.addfo).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.recommendinfo.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});
