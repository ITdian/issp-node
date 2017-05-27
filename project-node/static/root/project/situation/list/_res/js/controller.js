var app = angular.module('situationList', ['ng-pagination','toastr','ipCookie']);
app.controller('situationListCtrl',function($scope,situationSer,toastr,$stateParams,ipCookie,$location) {
   //选择
    $scope.selectList = function(event){
        angular.forEach($scope.situationLists.data,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idList = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idList);
    };
    //查看更多
    $scope.moreList = function(event){
        angular.forEach($scope.situationLists.data,function(obj){
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
        situationSer.listProjectSituationCap(listData).then(function(response){
            if(response.data.code==0){
                $scope.situationLists = response.data
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
            var keywords = {
                enginPlace: $scope.enginPlace,
                completeCondition: $scope.completeCondition,
            };
            situationSer.countProjectBaseInfo2(keywords).then(function (response) {
                if(response.data.code==0){
                    $scope.abili.itemsCount = response.data.data;
                }else if(response.data.code==1){
                    toastr.error( response.data.msg, '温馨提示');
                }else if(response.data.code==403||response.data.code==401){
                    toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                    var absurl = $location.absUrl();
                    ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com'});
                    setTimeout(function(){
                        window.location.href='http://localhost/login'
                    },2000)
                }
            });
            var data = {
                enginPlace: $scope.enginPlace,
                completeCondition: $scope.completeCondition,
                page: page
            };
            situationSer.searchProject(data).then(function(response){
                if(response.data.code == 0){
                    $scope.situationLists = response.data
                }else if(response.data.code==1){
                    toastr.error( response.data.msg, '温馨提示');
                }else if(response.data.code==403||response.data.code==401){
                    toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
                    var absurl = $location.absUrl();
                    ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com'});
                    setTimeout(function(){
                        window.location.href='http://localhost/login'
                    },2000)
                }
            });
        };
    }
    $scope.abili = {
        itemsCount: 14, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    situationSer.countProjectBaseInfo().then(function(response){
        if(response.data.code==0){
            $scope.abili.itemsCount = response.data.data;
        }else if(response.data.code==1){
            toastr.error( response.data.msg, '温馨提示');
        }else if(response.data.code==403||response.data.code==401){
            toastr.error( "请登录用户,2秒后跳至登陆页面", '温馨提示');
            var absurl = $location.absUrl();
            ipCookie('absurl', absurl,{ expires:3,expirationUnit: 'minutes',domain:'issp.bjike.com'});
            setTimeout(function(){
                window.location.href='http://localhost/login'
            },2000)
        }
    });
    //删除
    $scope.$on('deletedId',function(event,delid){
        angular.forEach($scope.situationLists.data,function(obj){
            if(obj.id == delid){
                obj._delete = true
            }
        })
    });
    $scope.titles = ["工程地点","完工情况"];
   /* $scope.datas = ["工程地点","完工情况"];
    $scope.tempdatas = $scope.datas;
    $scope.hidden=true;
    $scope.searchField='';
    $scope.change=function(x){
        $scope.searchField=x;
        $scope.hidden=true;
    }
    $scope.tempdatas = $scope.datas;
    $scope.changeKeyValue=function(v){
        var newDate=[];
        angular.forEach($scope.datas ,function(data,index,array){
            if(data.indexOf(v)>=0){
                newDate.unshift(data);
            }
        });
        $scope.datas=newDate;
        $scope.hidden=false;
        if($scope.datas.length==0 || ''==v){
            $scope.datas=$scope.tempdatas;
        }
        console.log($scope.datas);
    }*/
});
app.filter('myFilter',function(){
    return function(input,name,keywords){
        /*console.log(input);
        console.log(name);
        console.log(keywords);*/
        if(!keywords)return input;
        if(!name){
            return input.filter(function(item){
                for(var i in item){
                    if(item[i].toString().indexOf(keywords)!==-1){
                        return true;
                    }
                }
                return false;
            });
        }
    };
});