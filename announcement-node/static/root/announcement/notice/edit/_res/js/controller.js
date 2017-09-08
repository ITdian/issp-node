var app = angular.module('noticeEdit', ['toastr','angularjs-dropdown-multiselect','ueditor.directive']);
app.controller('noticeEditCtrl', function($scope, noticeSer,$stateParams,$state,toastr){
    var noticeData ={id: $stateParams.id};
    // $scope.setId(noticeData.id);
    $scope.condis= [];
    $scope.users= [];
    $scope.stringSettings = {template : '{{option}}', smartButtonTextConverter(skip, option) { return option; }};
    $scope.objLists = [];
    noticeSer.getClass().then(function(response){//查找所有分类
        if(response.data.code == 0){
            $scope.allClass = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    noticeSer.getUserList().then(function(response){//查找所有用户
        if(response.data.code == 0){
            $scope.allUserList = response.data.data;
            $scope.allUser = [];
            for(var i=0;i<$scope.allUserList.length;i++){
                $scope.allUser.push($scope.allUserList[i].username);
            }
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    noticeSer.findMails().then(function(response){//查找所有公邮
        if(response.data.code == 0){
            $scope.allMails = response.data.data;
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    }); 
    
    //获取ID
    noticeSer.findnoticeId(noticeData).then(function(response){
        if(response.data.code==0){
            $scope.notice = response.data.data;
            $scope.setId(noticeData.id);
            
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.noticeEditFun = function(){
        noticeSer.editnotice($scope.notice).then(function(response){
            if(response.data.code == 0){
                $state.go('root.announcement.notice.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





