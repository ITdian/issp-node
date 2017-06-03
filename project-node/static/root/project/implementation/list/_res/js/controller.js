var app = angular.module('implementationList', ['ng-pagination','toastr','ipCookie']);
app.controller('implementationListCtrl',function($scope,implementationSer,toastr,ipCookie,$location) {
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.implementationLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.implementationLists.data,function(obj){
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
        implementationSer.listImplementation(listData).then(function(response){
            if(response.data.code==0){
                $scope.implementationLists = response.data
            }else if(response.data.code==1){
                toastr.error( response.data.msg, '温馨提示');
            }
        });
        $scope.collect = function(){
            $scope.abili = {
                itemsCount: 12,//总条数
                take: 10,        //每页显示
                activatePage: activatePage, //当前页
            };
            implementationSer.countImplementation2($scope.signCondition,$scope.signProject,$scope.area,$scope.businessType,$scope.businessSubject).then(function (response) {
                if(response.data.code==0){
                    $scope.abili.itemsCount = response.data.data;
                }else if(response.data.code==1){
                    toastr.error( response.data.msg, '温馨提示');
                }
            })
            var data = {
                signCondition: $scope.signCondition,
                signProject: $scope.signProject,
                area: $scope.area,
                businessType: $scope.businessType,
                businessSubject: $scope.businessSubject,
                page: page
            };
            implementationSer.searchImplementation(data).then(function(response){
                if(response.data.code == 0){
                    $scope.implementationLists = response.data
                }else if(response.data.code==1){
                    toastr.error( response.data.msg, '温馨提示');
                }
            });
        };
    }
    $scope.abili = {
        itemsCount: 14, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    implementationSer.countImplementation().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.implementationLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
});
