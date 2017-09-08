var app = angular.module('skilAdd', ['toastr']);
app.controller('skilAddCtrl', function ($scope, skilSer, $state, toastr) {

    // //添加
    // $scope.skilAddFun = function () {
    //     var vm = $scope;
    //     skilSer.skilAdd(vm.skil).then(function (response) {
    //         if (response.data.code == 0) {
    //             $state.go('root.levelupskill.skills.list[12]');
    //             toastr.success("已成功添加", '温馨提示');
    //         }else{
    //             toastr.error( response.data.msg, '温馨提示');
    //         }
    //     });

    // };
//-----------------------------------1------------------------------------------
//     $scope.tab={
//         current: "_basic"
//     }
//     $scope.boardBtn=function(name){
//         $scope.tab.current = name;
//     }
//     $scope.btos =[{}];
//     $scope.btos.ctor=[{}];
//     $scope.add = function(){
//         var obj = {};
//         $scope.btos.push(obj);
//     }
//     $scope.bdd = function(){
//         var obj = {};
//         $scope.btos.ctor.push(obj);
//     }
//     $scope.ael = function(flag){
//         $scope.btos.splice(flag,1);
//     }
//     $scope.bel = function(flag){
//         $scope.btos.ctor.splice(flag,1);
//     }

//     $scope.skilAddFun = function(){
//         var data = {
//             system:$scope.system,
//             industry:$scope.industry,
//             subject:$scope.subject,
//             major:$scope.major,
//             skillGradingBTOS:angular.copy($scope.btos),
//         }
//         data.skillGradingBTOS[0].skillGradingCTOS=angular.copy($scope.btos.ctor);
//         console.log(data);
//         var addData = converFormData(data);
        
//         skilSer.skilAdd(addData).then(function(response){
//             if(response.data.code == 0){
//                 $state.go('root.levelupskill.skills.list[12]');
//                 toastr.success("客户信息已成功添加", '温馨提示');
//             }else{
//                 toastr.error( response.data.msg, '温馨提示');
//             }
//         })

//     }
// });
// //数据类型转换工具
// function converFormData() {
//     var objToFormData = function(obj,obj2,sec){
//         if(obj){
//             var count = 0;
//             for(var name in obj){
//                 var val = obj[name];
//                 if(val instanceof Array){
//                     val.forEach(function (item,index) {
//                         for(var name2 in item){
//                             var val2 = item[name2];
//                             if(val2 instanceof Array){
//                                 val2.forEach(function (dItem,dIndex) {
//                                     objToFormData(dItem,obj,name+'['+index+'].'+name2);
//                                 });
//                             }else{
//                                 if((typeof val2)!='function'){
//                                     obj[name+'['+index+'].'+name2] = val2;
//                                 }
//                             }
//                         }
//                     });
//                     delete obj[name];
//                 }else if(sec){
//                     if((typeof val)!='function'){
//                         obj2[sec+'['+count+'].'+name] = val;
//                         count++;
//                     }
//                 }
//             }
//         }

//     }
//     var _obj = $.extend(true,{},arguments[0]);
//     objToFormData(_obj);
//     return _obj;
// }
//-------------------------2-----------------------------
// var basicData ={id: $stateParams.id};
    //获取调研表名称
    // surveyplanSer.surveyplanName().then(function(response){
    //     if(response.data.code=='0'){
    //         $scope.typeList = response.data.data;
    //     }else{
    //         toastr.error( response.data.msg, '温馨提示');
    //     }
    // });
    // var basicData ={id: $stateParams.id};
    $scope.btos =[{skillGradingCTOS:[{}]}];
    $scope.add = function(){
        var obj = {skillGradingCTOS:[{}]};
        $scope.btos.push(obj);
    }
    $scope.del = function(flag){
        $scope.btos.splice(flag,1);
    }
    $scope.opdd = function(index){
        var obj = {};
        $scope.btos[index].skillGradingCTOS.push(obj);
    }
    $scope.opel = function(index,flag){
        $scope.btos[index].skillGradingCTOS.splice(flag,1);
    }

    //点击提交
    $scope.skilAddFun = function(){
        var data = {
            system:$scope.system,
            industry:$scope.industry,
            subject:$scope.subject,
            major:$scope.major,
            skillGradingBTOS:angular.copy($scope.btos),
        }
        console.log(data)
        var addData = converFormData(data);
        skilSer.skilAdd(addData).then(function(response){
            if(response.data.code == 0){
                $state.go('root.levelupskill.skills.list[12]');
                toastr.success( "添加成功", '温馨提示');
            }else {
                toastr.error(  response.data.msg , '温馨提示');
            }
        });
    };
});
//数据类型转换工具
function converFormData() {
    var objToFormData = function(obj,obj2,sec,flag){
        if(obj){
            var count = 0;
            for(var name in obj){
                var val = obj[name];
                if(val instanceof Array){
                    val.forEach(function (item,index) {
                        for(var name2 in item){
                            var val2 = item[name2];
                            if(val2 instanceof Array){
                                val2.forEach(function (dItem,dIndex) {
                                    objToFormData(dItem,obj,name+'['+index+'].'+name2,dIndex);
                                });
                            }else{
                                if((typeof val2)!='function'){
                                    obj[name+'['+index+'].'+name2] = val2;
                                }
                            }
                        }
                    });
                    delete obj[name];
                }else if(sec){
                    if((typeof val)!='function'){
                        obj2[sec+'['+flag+'].'+name] = val;
                        count++;
                    }
                }else if(typeof val == 'object'){
                    for(var key in val){
                        obj[name + '.' + key] = val[key];
                    }
                    delete obj[name];
                }
            }
        }

    }
    var _obj = $.extend(true,{},arguments[0]);
    objToFormData(_obj);
    return _obj;
}