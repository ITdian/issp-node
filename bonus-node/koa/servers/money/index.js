var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){

    //查询启动状态绩效指标数据
    this.bonusStart= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/performanceindicator/v1/findStart',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //根据\id获取绩效指标数据
    this.bonusId= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/performanceindicator/v1/findById/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //列表
    this.bonusList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/performanceindicator/v1/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //添加
    this.bonusAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/performanceindicator/v1/save',
            form : argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
//编辑
    this.bonusEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/performanceindicator/v1/update/${argvs.id}`,
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }

        };
        return request(options);
    };
//根据指标状态查询绩效指标数据
    this.bonusStatus= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/performanceindicator/v1/findByStatus',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
//启动
    this.bonusThaw = function(argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/performanceindicator/v1/start/${argvs.id}`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    }
//总条数
    this.bonusCount= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/performanceindicator/v1/getTotal',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
//删除
    this.bonusDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/performanceindicator/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
//关闭
    this.bonusFreeze = function(argvs) {
        var options = {
            method: 'PUT',
            timeout: 3000,
            uri: config()['rurl'] + `/performanceindicator/v1/close/${argvs.id}`,
            form: argvs,
            headers: {
                userToken: argvs.userToken
            }
        };
        return request(options);
    }
    //菜单权限
    this.infoGuide = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };


//-------------------------------------奖罚记录-------------------------------------
    //菜单权限
    this.infoGuide = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/biddinginfo/v1/guidePermission?guideAddrStatus=`+argvs.name,//2017-06-08
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //获取处罚总条数
    this.punishmentCount= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/push/total',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //奖励
    this.rewardAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/reward',
            form : argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //根据id获取奖罚记录
    this.findById= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/disciplinerecord/v1/findById/${argvs.id}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
//项目组处罚排名
    this.punishmentAllPush= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/projectPushRank'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //项目组奖励罚排名
    this.rewardAllReward= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/projectRewardRank'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
//个人处罚排名
    this.punishmentOnePush= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/personalPushRank'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //奖罚分数汇总
    this.scoreSummary= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/disciplineScoreCollect'+urlEncode(argvs,true),
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
//保存
    this.save = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/save',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
//奖励列表
    this.rewardList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/disciplinerecord/v1/reward/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
//处罚列表
    this.punishmentList= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/disciplinerecord/v1/push/maps?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //修改
    this.edit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/disciplinerecord/v1/update/${argvs.id}`,
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }

        };
        return request(options);
    };
//处罚
    this.punishmentAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/push',
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
//获取奖励总条数
    this.rewardCount= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/reward/total',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
//奖罚明细汇总
    this.summary= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/disciplineDetailCollect'+urlEncode(argvs,true),
            form : argvs,
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
//删除
    this.Delete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/disciplinerecord/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };

        return request(options);
    };
//根据过滤条件查询奖罚记录
    this.findByFilter= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/findByFilter',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //奖罚人数汇总
    this.numberSummary= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/disciplineQuantityCollect'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //个人奖励排名
    this.rewardOneReward= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/personalRewardRank'+urlEncode(argvs,true),
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };




    //--------------------------------------------------
    //获取地区
    this.rentArea= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/area',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    // //项目分析
    // this.moneyProject = function(argvs){
    //     var options = {
    //         method : 'GET',
    //         timeout : 3000,
    //         uri : config()['rurl'] + '/disciplinerecord/v1/project'+urlEncode(argvs,true)
    //     };
    //     return request(options);
    // }; 
    //项目组分析
    this.moneyGroup = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/group'+urlEncode(argvs,true)
        };
        return request(options);
    };
    //获取姓名
    this.rentName= function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/disciplinerecord/v1/name',
            headers : {
                userToken : argvs.userToken
            }
        };
        return request(options);
    };
    //--------------------------权限设置--------------------------

    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
        };
        return request(options);
    };
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    //下拉导航权限
    this.siginNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/biddinginfo/v1/sonPermission',//2017-06-10
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/biddinginfo/v1/setButtonPermission',//2017-06-12
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    return this;
}