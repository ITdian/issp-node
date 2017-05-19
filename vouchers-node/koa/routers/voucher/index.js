var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
module.exports = function(){
    var router = new Router();

    router.get('/vouchergenerate/list', function*(){ //记账凭证生成设置列表
        var $self = this;
        var page = $self.request.query;
        yield (server().generateList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/listFirstSubject', function*(){//获取所有一级科目
        var $self = this;
        yield (server().FirstSubject()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/listSubByFirst', function*(){//获取所有二级科目
        var $self = this;
        var secondData = $self.request.query;
        yield (server().SubByFirst(secondData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/listTubByFirst', function*(){//获取所有三级科目
        var $self = this;
        var thirdData = $self.request.query;
        yield (server().TubByFirst(thirdData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/add', function*(){//记账凭证生成设置添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().generateAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/edit', function*(){//记账凭证生成设置编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().generateEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/getOne', function*(){//ID查询记账凭证生成设置数据
        var $self = this;
        var findById = $self.request.query;
        yield (server().findGenerateId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/count', function*(){//获取记账凭证生成设置总条数
        var $self = this;
        yield (server().getGenerateTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/delete', function*(){//删除记账凭证生成设置
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().generateDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/listAudit', function*(){ //记账凭证审核列表
        var $self = this;
        var page = $self.request.query;
        yield (server().reviewList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/countAudit', function*(){//审核列表总条数
        var $self = this;
        yield (server().getReviewTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/split', function*(){//审核编辑拆分
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().splitEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/audit', function*(){//通过id审核记账凭证
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().reviewSplit(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/listAudited', function*(){ //已审核列表
        var $self = this;
        var page = $self.request.query;
        yield (server().auditList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/countAudited', function*(){//获取已审核列表总条数
        var $self = this;
        yield (server().getAuditTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/posting', function*(){//过账
        var $self = this;
        var postData = $self.request.body;
        postData.userToken = $self.cookies.get('token');
        yield (server().auditPosting(postData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/antiAudit', function*(){//反审核
        var $self = this;
        var antiData = $self.request.query;
        antiData.userToken = $self.cookies.get('token');
        yield (server().AuditAnti(antiData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/collectSub', function*(){//已审核科目汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().auditSubSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/collectArea', function*(){//已审核地区汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().auditAreaSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/collectGroup', function*(){//已审核项目组汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().auditGroupSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/collectPname', function*(){//已审核项目名称汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().auditProjectSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/listArea', function*(){//获取所有地区
        var $self = this;
        yield (server().getAllArea()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/listGroup', function*(){//获取所有项目组
        var $self = this;
        yield (server().getAllGroup()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/listProject', function*(){//获取所有项目名称
        var $self = this;
        yield (server().getAllProject()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/listChecked', function*(){ //已过帐列表
        var $self = this;
        var page = $self.request.query;
        yield (server().postedList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/countChecked', function*(){//获取已过帐列表总条数
        var $self = this;
        yield (server().getPostedTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/checkAccount', function*(){//结账
        var $self = this;
        var postData = $self.request.body;
        postData.userToken = $self.cookies.get('token');
        yield (server().PostedBill(postData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/antiPosting', function*(){//反过账
        var $self = this;
        var antiData = $self.request.query;
        antiData.userToken = $self.cookies.get('token');
        yield (server().PostedAnti(antiData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/ctTransSub', function*(){//已过帐科目汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().postedSubSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/ctTransArea', function*(){//已过帐地区汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().postedAreaSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/ctTransGroup', function*(){//已过帐项目组汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().postedGroupSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/ctTransPname', function*(){//已过帐项目名称汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().postedProjectSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/listCkRecord', function*(){ //结账记录列表
        var $self = this;
        var page = $self.request.query;
        yield (server().billRecordsList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/countCkRecord', function*(){//获取结账记录列表总条数
        var $self = this;
        yield (server().getBillRecordsTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/ctCkSub', function*(){//已结帐科目汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().billSubSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/ctCkArea', function*(){//已结帐地区汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().billAreaSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/ctCkGroup', function*(){//已结帐项目组汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().billGroupSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/ctCkPname', function*(){//已结帐项目名称汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().billProjectSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/listRecord', function*(){ //记账凭证记录列表
        var $self = this;
        var page = $self.request.query;
        yield (server().VRList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/vouchergenerate/countRecord', function*(){//获取记账凭证记录列表总条数
        var $self = this;
        yield (server().getVRTotal()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/ctReSub', function*(){//记账凭证记录科目汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().VRSubSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/ctReArea', function*(){//记账凭证记录地区汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().VRAreaSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/ctReGroup', function*(){//记账凭证记录项目组汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().VRGroupSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/vouchergenerate/ctRePname', function*(){//记账凭证记录项目名称汇总
        var $self = this;
        var summaryData = $self.request.body;
        summaryData.token = $self.cookies.get('token');
        yield (server().VRProjectSummary(summaryData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/user/logout', function*(){ //登录退出
        var $self = this;
        var token ={token:$self.cookies.get('token')};
        yield (server().logout(token)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                if(responseText.code==0){
                    $self.cookies.set('token','');
                    $self.body = responseText;
                }
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
    return router;
};
