/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('ssuiEdit', ['toastr','ipCookie']);
app.controller('ssuiEditCtrl', function($scope, ssuiSer,$state,toastr,$stateParams,ipCookie,$location){
    var companyId = {id : $stateParams.id};
    //获取值
    ssuiSer.getOneById(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        $scope.data.planActivityTiming = angular.element('.addPlanTime').val();//计划时间
        $scope.data.actualActivityTiming = angular.element('.addActualTime').val();//实际时间
        var data = $scope.data;
        data.id = companyId.id;
        ssuiSer.marketserveapplyEdit(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.projectmeasure.interface.ssui.list');
                toastr.success('温馨提示',"此次编辑成功");
            }else if(response.data.code==403  || response.data.code==401){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }
    
});
   