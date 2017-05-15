var app = angular.module('postsExplain', ['toastr', 'angularjs-dropdown-multiselect','ipCookie']);
app.controller('postsExplainCtrl', function($scope, $state, toastr, postsSer, $stateParams,ipCookie){


    //编号、岗位ID
    var getId = {id : $stateParams.id};
    postsSer.getPostId(getId).then(function(response){
        if(response.data.code == 0){
            $scope.postsData = response.data.data;
        }

    });

    //角度
    postsSer.getAngle().then(function(response){
        if(response.data.code == 0){
            $scope.angles = response.data.data
        }
    });
    //维度
    postsSer.getDimension().then(function(response){
        if(response.data.code == 0){
            $scope.dimensions = response.data.data
        }
    });
    //分类
    postsSer.getClassify().then(function(response){
        if(response.data.code == 0){
            $scope.classifys = response.data.data
        }
    });
    //体现分类
    postsSer.getReflect().then(function(response){
        if(response.data.code == 0){
            $scope.reflects = response.data.data
        }
    });
    //操作类型
    postsSer.getOperate().then(function(response){
        if(response.data.code == 0){
            $scope.operates = response.data.data
        }
    });
    $scope.explainAddFun = function(){
        var vm = $scope;
        var data = {
            serialNumber : vm.postsData.serialNumber,
            positionId : vm.postsData.id,
            angleId : vm.angleId,
            dimensionId : vm.dimensionId,
            classifyId : vm.classifyId,
            reflectIds : vm.reflectId,
            operateIds : vm.operateId,
            description : vm.description,
            outcome : vm.outcome,
            frequency : angular.element('.frequency').val(),
            timeNode : angular.element('.timeNode').val(),
            function:$scope.funcs
        };
       
        postsSer.explainAdd(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.organize.management.posts.list');
                toastr.success( "已成功添加", '温馨提示');
            }else if(response.data.code==403||response.data.code==401){
                toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },2000)
            }
        });
    }

});





