var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
module.exports = function(){
   //市场信息列表
    this.marketInformBaseinfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + '/marketinfo/v1/list?limit=10&page='+argvs.page,
        };
        return request(options);
    };
    //市场信息分页
    this.informationCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + '/marketinfo/v1/count',
        };
        return request(options);
    };
    //市场信息删除
    this.informationDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + '/marketinfo/v1/delete/'+argvs.id,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //市场信息添加
    this.projectMarketInformAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + '/marketinfo/v1/add',
            form:argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //市场信息编辑
    this.informationEdit = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + '/marketinfo/v1/edit',
            form : argvs,
            headers : {
                userToken:argvs.token
            }
        };
        return request(options);
    };
    //市场信息编辑id
    this.informationEditById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + '/marketinfo/v1/market/'+argvs.id,
            form : argvs,
        };
        return request(options);
    };
    //汇总
    this.informationSummary = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['marketinform']['rurl'] + `/marketemail/v1/collect?areas=${encodeURIComponent(argvs)}`,
            form:argvs,
        };
        return request(options);
    };
    this.informationAllAreaById = function () {
        var options = {
            method: 'GET',
            timeout: 3000,
            uri: config()['marketinform']['rurl'] + '/marketemail/v1/area',
        };
        return request(options);
    };
    this.logout = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['user']['rurl'] + `/v1/sign-out/${argvs.token}`,
            form:argvs
        };
        return request(options);
    };
    return this;
};