/**
 * Created by ike on 2017/4/13.
 */
var app = angular.module('projectList', ['ng-pagination','toastr','ipCookie']);
app.controller('projectListCtrl',function($scope,projectSer,toastr,ipCookie) {
    $scope.companySearchFun = function(){
        $scope.teamInfo = {};
    };
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.projectLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        $scope.iName = event.name;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
        ipCookie('name', $scope.iName,{ expires:3,expirationUnit: 'minutes' });
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.projectLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    
    function activatePage(page) {
        var listData = {
            page:page
        }
        projectSer.listData(listData).then(function(response){
            if(response.data.code==0){
                $scope.projectLists = response.data;
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    $scope.project = {
        itemsCount: 11, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    projectSer.countBaseInfo1().then(function(response){
        if(response.data.code == 0){
            $scope.project.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.projectLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });

});
