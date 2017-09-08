var app = angular.module('projectAdd', ['toastr']);
app.controller('projectAddCtrl', function($scope, projectSer,$state,toastr){
    $scope.arranges = [{}];//
    $scope.urgencys = [{}];//
    $scope.gifts = [{}];//
    $scope.notices = [{}];//

    //获取所有的节假日名字
    projectSer.allFestivalList().then(function(response){
        if(response.data.code == 0){
            $scope.allFestival = response.data.data;
        }
    })
    //添加
    $scope.AddFun = function(){
        $scope.data.holidayWorkPlanTOList = angular.copy($scope.arranges);
        $scope.data.areaRelationerTOList = angular.copy($scope.urgencys);
        $scope.data.welfareTOList =angular.copy($scope.gifts);
        $scope.data.noticeThingTOList = angular.copy($scope.notices);
        var data = $scope.data;
        var addData = converFormData(data)
        projectSer.addMarketserveapply1(addData).then(function(response){
            if(response.data.code == 0){
                $state.go('root.legalholiday.holiday.project.list[12]');
                toastr.success( "已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        });
    };

    //表头选择
    $scope.tab={
        current: "_basic"
    }
    $scope.boardBtn=function(name){
        $scope.tab.current = name;
    }
    //添加多项
    $scope.more = function(){
        var obj = {};
        switch ($scope.tab.current){
            case '_arrange':
                $scope.arranges.push(obj);
                break;
            case '_urgency':
                $scope.urgencys.push(obj);
                break;
            case '_gift':
                $scope.gifts.push(obj);
                break;
            case '_notice':
                $scope.notices.push(obj);
                break;
        }
    }
    $scope.del = function(val){
        switch ($scope.tab.current){
            case '_arrange':
                $scope.arranges.splice(val,1)
                break;
            case '_urgency':
                $scope.urgencys.splice(val,1)
                break;
            case '_gift':
                $scope.gifts.splice(val,1)
                break;
            case '_notice':
                $scope.notices.splice(val,1)
                break;
        }
    }

});




