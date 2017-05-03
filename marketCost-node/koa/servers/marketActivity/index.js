var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
    //列表
   this.marketserveBaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/list?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取数目
    this.countBaseInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加市场招待申请
    this.addMarketserveapply = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/add'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加客户信息
    this.addCustomerinfo = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/addcustomerinfo'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取编辑id
     this. marketserveEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/marketserveapply/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //编辑市场招待申请
    this.marketserveEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/edit'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //删除
    this.marketserveapplyDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    //编辑 资金模块意见
    this.marketserveOpinionEidt1 = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/fundModuleOpinion'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //编辑 决策层审核意见
    this.executiveEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserveapply/v1/executiveOpinion'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //市场招待汇总
     this.summarylist= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/list?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //总数
    this.summaryCount= function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/count',
        };
        return request(options);
    };
    //冻结
     this.summaryCongeal = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/congeal?userToken='+argvs.userToken,
            form:argvs,
        };
        return request(options);
    };
    //解冻
    this.summaryBreakfreeze = function(argvs){
        var options = {
            method : 'PATCH',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/thaw?userToken='+argvs.userToken,
            form:argvs,
        };
        return request(options);
    };
    //删除
    this.summaryDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };
    //市场招待汇总 添加  
     this.summarylAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/add?userToken='+argvs.userToken,
            form:argvs,
        };
        return request(options);
    };
//市场招待汇总 编辑id
    this.getSummaryId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/marketservesummary/' + argvs.id,
            form:argvs,
        };
        return request(options);
    }; 
   //编辑
    this.PutSummarylEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketservesummary/v1/edit?userToken='+argvs.userToken,
            form:argvs,
        };
        return request(options);
    };


    //市场招待记录 列表
   this.servereCordBaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/list?limit=10&page='+argvs.page,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //获取数目
    this.servereCordCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/count',
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加市场招待记录
    this.addservereCordapply = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/add'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };   
    //获取编辑id
     this. marketserveEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/marketserverecord/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //编辑市场招待记录
    this.marketserveEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/edit'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //编辑 资金模块意见
    this.marketserveOpinionEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/fundmodule'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    //添加 市场招待记录
    this.addserverecordinfo = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/add?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
    this.servereCordAddCustomer = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/customerinfo/v1/add'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    }; 
     this.serverecordEidtId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/marketserverecord/'+argvs.id,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    };
     //编辑 市场招待记录
    this.serverecordEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/edit'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options); 
    }; 
    //编辑 市场资金模块意见
    this.serverecordOpinionEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/fundmodule'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    }; 
    //编辑 决策层意见
    this.servereCordExecutive = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/executive'+'?userToken='+argvs.userToken,
            form:argvs,
            headers : {
                // token : token
            }
        };
        return request(options);
    }; 
    //删除
    this.servereCordDele = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + '/marketserverecord/v1/delete/'+argvs.id+'?userToken='+argvs.userToken,
        };
        return request(options);
    };


    return this;
};