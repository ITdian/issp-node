var app = angular.module('websiteAdd', ['toastr']);
app.controller('websiteAddCtrl', function ($scope, websiteSer, $state, toastr) {

    //添加
    $scope.webAddFun = function () {
        var vm = $scope;
        websiteSer.addWebsite(vm.web).then(function (response) {
            if (response.data.code == 0) {
                $state.go('root.biddingManagement.websiteInfo.list');
                toastr.success("已成功添加", '温馨提示');
            } else if (response.data.code == 403) {
                toastr.error("请登录用户", '温馨提示');
            }
        });

    };

});




