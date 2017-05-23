var app = angular.module('areaMonthList', ['ng-pagination','toastr']);
app.controller('areaMonthListCtrl',function($scope,areaMonthSer,toastr){
    $scope.$emit('changeId', null);
    $scope.selectList = function(event){
        angular.forEach($scope.areaMonthLists,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        //向父Ctrl传递事件
        $scope.$emit('changeId', event.id);
    };
    //分页
    $scope.pagination = {
        itemsCount: 11,//总条数
        take: 10,        //每页显示
        activatePage: activatePage
    };
    function activatePage(page) {
        var pages = {
            page:page
        };
        areaMonthSer.listAreaMonth(pages).then(function(response){
            if(response.data.code==0){
                $scope.areaMonthLists = response.data.data;
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
    }
    $scope.moreList = function(event){
        angular.forEach($scope.areaMonthLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };
    areaMonthSer.countAreaMonth().then(function(response){
        if(response.data.code==0){
            $scope.pagination.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    });
   });


