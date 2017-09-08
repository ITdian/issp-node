var app = angular.module('holiday', []);
app.controller('holidayCtrl', function ($scope,$state) {
    if ($state.current.url == '/holiday') {//默认加载列表
         $state.go('root.legalholiday.holiday.gift');
    }
})