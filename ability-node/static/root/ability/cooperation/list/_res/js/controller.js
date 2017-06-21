var app = angular.module('cooperationList', ['ng-pagination','toastr']);
app.controller('cooperationListCtrl',function($scope,cooperationSer,toastr) {
        $scope.teamInfo = {};
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.cooperationLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.cooperationLists.data,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    //分页
    function activatePage(page) {
        var listData = {
            page:page
        }
        cooperationSer.listAbilityCooperation(listData).then(function(response){
            if(response.data.code==0){
                $scope.cooperationLists = response.data
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
        $scope.collect = function(){
            $scope.abili = {
                itemsCount: 12,//总条数
                take: 10,        //每页显示
                activatePage: activatePage, //当前页
            };
            cooperationSer.countCooperation2($scope.companyName).then(function (response) {
                if(response.data.code==0){
                    $scope.abili.itemsCount = response.data.data;
                }else{
                    toastr.error(response.data.msg, '温馨提示');
                }
            })
            var data = {
                companyName: $scope.companyName,
                page: page
            };
            cooperationSer.searchCooperationAbility(data).then(function(response){
                if(response.data.code == 0){
                    $scope.cooperationLists = response.data
                }else{
                    toastr.error(response.data.msg, '温馨提示');
                }
            });
        };
    }
    $scope.abili = {
        itemsCount: 9, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    cooperationSer.countCooperation().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
        }else{
            toastr.error(response.data.msg, '温馨提示');
        }
    });
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.cooperationLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
