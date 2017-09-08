var app = angular.module('noticeAdd', ['toastr','angularjs-dropdown-multiselect','ueditor.directive']);
app.controller('noticeAddCtrl', function($scope, noticeSer,$state,toastr){
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
    noticeSer.getuuid().then(function(response){//获取uuid
        if(response.data.code == 0){
            $scope.getuuid = response.data.data;
            $scope.setId($scope.getuuid);
        }else {
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //添加
    $scope.noticeAddFun = function(){
        $scope.notice.recipients = [];
        for( var i = 0; i<$scope.users.length;i++){
            for(var j = 0;j<$scope.allUserList.length;j++){
                var o = $scope.allUserList[j]
                if($scope.users[i] == o.username){
                    $scope.notice.recipients.push(o.id);
                    break;
                }
            }
        }
        var data = $scope.notice;
        data.uuid = $scope.getuuid;
        data.publishContent = $scope.ueditorGetContent('Container');
        noticeSer.addnotice(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.announcement.notice.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else {
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };

    $scope.getContent=function(id){  
        var content=$scope.ueditorGetContent(id);
     }
    $scope.setContent=function(){  
         $scope.ueditorSetContent("Container","111111");            
     }  
});




