var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){

    this.customerbaseinfoList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/listCustomerBaseInfo?limit=10&page=' + argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.countBaseInfo = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.customerLevel = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerlevel/v1/listCustomerLevel',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.generateNumber = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/generateNumber',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.cusBaseinfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/add',
            form : argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.cusBaseinfoEdit = function(argvs){
        console.info(argvs);
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/edit',
            form : argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.cusBaseinfoDel = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/delete/' + argvs.id + '?userToken=' + argvs.userToken,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.cusBaseinfoCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/congeal/' + argvs.id + '?userToken=' + argvs.userToken,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.cusBaseinfoThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/thaw/' + argvs.id + '?userToken=' + argvs.userToken,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };

    this.getCustomer = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/getCustomer?customerNum=' + argvs.customerNum,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };

    //获取客户级别列表
    this.customerlevel = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerlevel/v1/listCustomerLevel',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };

    //添加
    this.customerlevelAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerlevel/v1/add',
            form : argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //删除
    this.customerlevelDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerlevel/v1/delete/' + argvs.id + '?userToken=' + argvs.userToken,
            headers : {
                userToken : argvs.token
            }

        };
        return request(options);
    };
    //单个客户等级信息
    this.getCustomerLevelinfo = function(argvs){

        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerlevel/v1/getCustomerLevel?name=' + encodeURIComponent(argvs.name),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };

    //编辑客户信息
    this.customerlevelEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerlevel/v1/edit',
            form : argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //客户详细信息
    this.listCustomerDetail = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerdetail/v1/listCustomerDetail?limit=10&page=' + argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //获取客户详细信息条数
    this.getDetailCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerdetail/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //获取客户编号
    this.getCusNum = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/getCusNum',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //添加客户详情
    this.addCusDetail = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerdetail/v1/add',
            form : argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //获取客户详情
    this.getCusDetail = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerdetail/v1/getInfoByCustomerNum?customerNum=' + argvs.customerNum,
            form : argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //编辑客户详情
    this.editDetail = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerdetail/v1/edit',
            form : argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);

    };

    //删除
    this.deteleDetail = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerdetail/v1/delete/' + argvs.id + '?userToken=' + argvs.userToken,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);

    };
    //客户邮箱
    this.listCusEmail = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/cusemail/v1/listCusEmail?limit=10&page=' + argvs.page,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //邮件条数
    this.emailCount = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/cusemail/v1/count',
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //行业
    this.getWork = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/customerbaseinfo/v1/getWorks',
            form:argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //添加邮件
    this.cusemailAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/cusemail/v1/add',
            form:argvs,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //删除邮件
    this.cusemailDel = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/cusemail/v1/delete/'+argvs.id,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //冻结邮件
    this.cusemailCongeal = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/cusemail/v1/congeal/'+argvs.id,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    //借冻邮件
    this.cusemailThaw = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/cusemail/v1/thaw/'+argvs.id ,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.getCusEmailId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/cusemail/v1/getCusEmailById/'+argvs.id,
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.editEmail = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/cusemail/v1/edit',
            headers : {
                userToken : argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    this.getCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/cusemail/v1/collect?works='+encodeURIComponent(argvs.join(',')),
            headers : {
                userToken : argvs.token
            }
        };
        return request(options);
    };
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['customer']['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['customer']['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.token
            },
            form:argvs
        };
        return request(options);
    };
    return this;
}