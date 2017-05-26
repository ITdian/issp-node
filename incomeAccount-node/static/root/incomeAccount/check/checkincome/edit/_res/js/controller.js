/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('checkincomeEdit', ['toastr']);
app.controller('checkincomeeditCtrl', function($scope, checkincomeSer,$state,toastr,$stateParams){
    var companyId = {id : $stateParams.id};
    //获取id对应的数据
    checkincomeSer.getOneById1(companyId).then(function(response){
        if(response.data.code==0){
            $scope.data = response.data.data;
        }
    });
    //点击提交
    $scope.EditFun =function(){
        $scope.data.time = angular.element('.time').val();
        var data = $scope.data;
        data.id = companyId.id;
        checkincomeSer.editData(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.incomeAccount.check.checkincome.list');
                toastr.success('温馨提示',"此次编辑成功");
            }if(response.data.code == 403){
                toastr.error( "请登录用户,3秒后跳至登陆页面", '温馨提示');
                var absurl = $location.absUrl();
                ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com' });
                setTimeout(function(){
                    window.location.href='http://localhost/login'
                },3000)
            }
        })
    }
});
   