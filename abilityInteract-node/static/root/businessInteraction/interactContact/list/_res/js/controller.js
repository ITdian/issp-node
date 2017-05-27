var app = angular.module('interactList', ['ng-pagination','toastr']);
app.controller('interactListCtrl',function($scope,contactSer,toastr){
    $scope.$emit('changeId', null);
    function activatePage(page) {
        var listData = {
            page:page
        };
        contactSer.interactList(listData).then(function(response){
            if(response.data.code==0){
                $scope.interactLists = response.data.data
            }else{
                toastr.error( "请求超时，请联系管理员", '温馨提示');
            }
        });
        $scope.collect = function(){
            $scope.custom = {
                itemsCount: 2, //总条数
                take: 10, //每页显示
                activatePage: activatePage
            };
            contactSer.countInteract2($scope.companyName).then(function (response) {
                if(response.data.code==0){
                    $scope.custom.itemsCount = response.data.data;
                }else{
                    toastr.error( "请求超时，请联系管理员", '温馨提示');
                }
            });
            var data = {
                companyName: $scope.companyName,
                page: page
            };
            contactSer.searchInteraction(data).then(function(response){
                if(response.data.code == 0){
                    $scope.interactLists = response.data
                }else if(response.data.code==403){
                    toastr.error( "请登录用户", '温馨提示');
                }
            });
        };
    }

    $scope.selectList = function(event){
        angular.forEach($scope.interactLists,function(obj){
                obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.interactLists,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

    $scope.$on('deletedId',function(event,delid){

        angular.forEach($scope.interactLists,function(obj){
            if(obj.id == delid){
                obj._delete = delid
            }
        })
    });

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };

    contactSer.countInteract().then(function(response){
        if(response.data.code==0){
            $scope.custom.itemsCount = response.data.data;
        }else{
            toastr.error( "请求超时，请联系管理员", '温馨提示');
        }
    })

});

