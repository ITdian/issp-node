    var app = angular.module('requireAdd', ['toastr']);
    app.controller('requireAddCtrl', function($scope, requireSer,$state,$stateParams,toastr){
    var scrapData ={id: $stateParams.id};
    //获取ID
    requireSer.schemefind(scrapData).then(function(response){
        if(response.data.code==0){
            $scope.reqSche = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    $scope.detailList = [{}];
    $scope.addtra = function(){
        var obj = {};
        $scope.detailList.push(obj);
    }
    $scope.cleartra = function (index) {
        if(index == '0')return
        $scope.detailList.splice(index,1);
    }
    requireSer.requireList().then(function(response){
        if(response.data.code==0){
            $scope.requireLi=response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
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
    //推荐方案类型表
    requireSer.typelist().then(function(response){
        var vm = $scope;
        if(response.data.code == 0){
            $scope.tylist = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //推荐方案表
    requireSer.schemelist().then(function(response){
        var vm = $scope;
        if(response.data.code == 0){
            $scope.schelist = response.data.data;
        }else{
            toastr.error(response.data.msg,'温馨提示');
        }
    });
    //添加
    $scope.requireAddFun = function(){
        var vm = $scope;
        var data={
            recommendSchemeId:vm.reqAdd.recommendSchemeId,
            recommendTypeId:vm.reqAdd.recommendTypeId,
            indicatorResource:vm.reqAdd.indicatorResource,
            assessWay:vm.reqAdd.assessWay,
            recommendWay:vm.reqAdd.recommendWay,
            recommendSponsor:vm.reqAdd.recommendSponsor,
            recommendTime:vm.reqAdd.recommendTime

        }
        for(var i = 0;i<$scope.detailList.length;i++){
            var o = $scope.detailList[i];
            data['detailList['+i + ']' + '.content'] = o.content;
            data['detailList['+i + ']' + '.require'] = o.require;

        }
        requireSer.addRequire(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.recomManagement.recommendrequire.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});


