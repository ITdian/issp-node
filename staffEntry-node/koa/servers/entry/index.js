var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
module.exports = function(){
    //注册用户列表
   this.registrationList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/staffentryregister/v1/list?limit=10&page=${argvs.page}`
        };
        return request(options);
    };
    //获取总条数
    this.registrationCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/staffentryregister/v1/count'
        };
        return request(options);
    };
    //获取注册的员工编号
    this.registrationNumber = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/staffentryregister/v1/maxEmpNumber',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //添加 
    this.registrationAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/staffentryregister/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id 
     this.registrationById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/staffentryregister/v1/getOne/${argvs.id}`
        };
        return request(options);
    };
    //编辑 
    this.registrationEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/staffentryregister/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除 
    this.registrationDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/staffentryregister/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //入职登记列表
    this.entryregisterList= function(argvs){
        argvs.limit = 10;
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/entryregister/v1/list${urlEncode(argvs,true)}`
        };
        return request(options);
    };
    //获取条目
    this.entryregisterCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/entryregister/v1/count',
        };
        return request(options);
    };
    //添加
    this.entryregisterAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/entryregister/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id
    this.entryregisterById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/entryregister/v1/getEntryRegister/${argvs.id}`
        };
        return request(options);
    };
    //编辑
    this.entryregisterEidt = function(argvs){
        var options = {
            method : 'PUT',
            timeout:3000,
            uri : config()['rurl'] + `/entryregister/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除
    this.entryregisterDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/entryregister/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //入职基本信息列表
   this.basicInfoList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/entrybasicinfo/v1/listEntryBasicInfo?limit=10&page=${argvs.page}`
        };
        return request(options);
    };
    //获取入职基本信息总条数
    this.basicInfoCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/entrybasicinfo/v1/count'
        };
        return request(options);
    };
    //添加入职基本信息
    this.basicInfoAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/entrybasicinfo/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id
     this.basicInfoById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/entrybasicinfo/v1/getEntryBasicInfo/${argvs.id}`
        };
        return request(options);
    };
    //编辑入职基本信息
    this.basicInfoEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/entrybasicinfo/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除入职基本信息
    this.basicInfoDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/entrybasicinfo/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取所有岗位
    this.basicInfoPost = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/entrybasicinfo/v1/listPost'
        };
        return request(options);
    };
    //入职情况汇总
    this.getInfoCollect = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/entrybasicinfo/v1/collect'+urlEncode(argvs,true)
        };
        return request(options);
    };
    //薪资确认列表
    this.salaryList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryconfirmrecord/v1/list?limit=10&page=${argvs.page}`
        };
        return request(options);
    };
    //获取薪资确认总条数
    this.salaryCount = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/salaryconfirmrecord/v1/count'
        };
        return request(options);
    };
    //添加薪资确认
    this.salaryAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryconfirmrecord/v1/add`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //获取编辑id
    this.salaryById = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryconfirmrecord/v1/getOne/${argvs.id}`
        };
        return request(options);
    };
    //编辑薪资确认
    this.salaryEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryconfirmrecord/v1/edit`,
            form:argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //删除薪资确认
    this.salaryDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/salaryconfirmrecord/v1/delete/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //退出
    this.logout = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['user'] + `/v1/sign-out/${argvs.userToken}`,
			form:argvs
    };
        return request(options);
    };
    return this;
};