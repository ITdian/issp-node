
var app = angular.module('projectEdit', ['toastr']);
app.controller('projectEditCtrl', function($scope, projectSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取值
    projectSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
            $scope.arranges = response.data.data.holidayWorkPlanVOList || [{}];
            $scope.urgencys = response.data.data.areaRelationerVOList || [{}];
            $scope.gifts = response.data.data.welfareVOList || [{}];
            $scope.notices = response.data.data.noticeThingVOList || [{}];
        }
    });
    //获取所有的节假日名字
    projectSer.allFestivalList().then(function(response){
        if(response.data.code == 0){
            $scope.allFestival = response.data.data;
        }else{
            toastr.error( response.data.msg , '温馨提示');
        }
    })

    //点击提交
    $scope.EditFun =function(){
        $scope.data.holidayWorkPlanTOList = angular.copy($scope.arranges);
        $scope.data.areaRelationerTOList = angular.copy($scope.urgencys);
        $scope.data.welfareTOList =angular.copy($scope.gifts);
        $scope.data.noticeThingTOList = angular.copy($scope.notices);
        var data = $scope.data;
        var addData = converFormData(data)
        var data = $scope.data;
        data.id = companyId.id;;
        projectSer.gitfEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.legalholiday.holiday.project.list[12]');
                toastr.success('温馨提示',"此次编辑成功");
            }else{
                toastr.error( response.data.msg , '温馨提示');
            }
        })
    }
     //表头选择
    $scope.tab={
        current: "_basic"
    }
    $scope.boardBtn=function(name){
        $scope.tab.current = name;
    }
});
   