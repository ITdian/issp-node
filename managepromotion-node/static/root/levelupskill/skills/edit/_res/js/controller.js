var app = angular.module('skilEdit', ['toastr']);
app.controller('skilEditCtrl', function($scope, skilSer,$stateParams,$state,toastr){
var basicData ={id: $stateParams.id};
    //获取ID
    skilSer.skilId(basicData).then(function(response){
        if(response.data.code==0){
            $scope.skil = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
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
            id: $stateParams.id
        }
        console.log(data)
        var addData = converFormData(data);
        skilSer.skilEdit(addData).then(function(response){
            if(response.data.code == 0){
                $state.go('root.levelupskill.skills.list[12]');
                toastr.success( "编辑成功", '温馨提示');
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





