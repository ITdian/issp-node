/**
 * Created by ike on 2017/4/18.
 */
var app = angular.module('checkTime', ['toastr','ipCookie']);
app.controller('checkTimeCtrl', function($scope, projectSer,$state,toastr,$stateParams,ipCookie){
    var name = ipCookie('name');
    var checkTimeName = {name : name};
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.checkProList.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    //获取值
    function activatePage(page) {
        var listData = {
            page:page,
            name:name
        }
        projectSer.checkTimeList(listData).then(function(response){
            if(response.data.code==0){
                $scope.checkTimeLists = response.data;
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    
    $scope.project = {
        itemsCount: 9, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    projectSer.checkTimeCount(checkTimeName).then(function(response){
        if(response.data.code == 0){
            $scope.project.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
});
   