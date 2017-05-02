var app = angular.module('merchantPortalApp', [
    'ngMaterial',
    'scrollToEnd'
]);


app.config(function($mdThemingProvider) {

    $mdThemingProvider.theme('blue-grey')
        .primaryPalette('blue-grey');

});

// View list of orders
app.controller('ordersController',
[
    '$scope', '$filter', '$mdDialog', function ($scope, $filter, $mdDialog) {

        $scope.savedOrders = sessionStorage.getItem('orders');
        $scope.savedOrderLog = sessionStorage.getItem('orderLog');
        $scope.savedAccountLog = sessionStorage.getItem('accountLog');

        $scope.orders = (sessionStorage.getItem('orders') !== null)
            ? JSON.parse($scope.savedOrders)
            : [
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412553',
                    customerName: 'Leo Russel',
                    date: new Date(2017, 0, 31),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412545',
                    customerName: 'Sam Ward',
                    date: new Date(2017, 0, 31),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412501',
                    customerName: 'David Hull',
                    date: new Date(2017, 0, 31),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412473',
                    customerName: 'Dominic Young',
                    date: new Date(2017, 0, 31),
                    orderType: 'Bank Account'
                },
               
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412113',
                    customerName: 'Renee Seaver',
                    date: new Date(2017, 0, 30),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412107',
                    customerName: 'Tad Sauvage',
                    date: new Date(2017, 0, 30),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412027',
                    customerName: 'Lottie Moses',
                    date: new Date(2017, 0, 30),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Pending',
                    trackId: '150412010',
                    customerName: 'Shelia Jefferson',
                    date: new Date(2017, 0, 30),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Rejected',
                    trackId: '150411883',
                    customerName: 'Aurora Waterman',
                    date: new Date(2017, 0, 29),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411733',
                    customerName: 'Lessie Bolton',
                    date: new Date(2017, 0, 28),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Rejected',
                    trackId: '150411607',
                    customerName: 'Judi Dane',
                    date: new Date(2017, 0, 27),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411511',
                    customerName: 'Annie Varley',
                    date: new Date(2017, 0, 27),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411493',
                    customerName: 'Evette Simonson',
                    date: new Date(2017, 0, 25),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411387',
                    customerName: 'Dotty Bennet',
                    date: new Date(2017, 0, 25),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411258',
                    customerName: 'Royal Mynatt',
                    date: new Date(2017, 0, 23),
                    orderType: 'Credit Card'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                },
                {
                    selected: false,
                    status: 'Accepted',
                    trackId: '150411007',
                    customerName: 'Edwina Drake',
                    date: new Date(2017, 0, 23),
                    orderType: 'Bank Account'
                }
            ];
        $scope.orderLog = (sessionStorage.getItem('orderLog') !== null)
            ? JSON.parse($scope.savedOrderLog)
            : [
                {
                    
                    time: new Date(2017, 0, 27, 15, 36, 07),
                    trackId: '150411607',
                    by: 'Tony',
                    ip: '10.2.124.7',
                    customerName: 'Judi Dane',
                    orderType: 'Credit Card'
                },
                {
                    time: new Date(2017, 0, 27, 16, 54, 38),
                    trackId: '15041511',
                    by: 'Tony',
                    ip: '10.2.124.122',
                    customerName: 'Annie Varley',
                    orderType: 'Credit Card'
                },
                {
                    time: new Date(2016, 0, 23, 12, 03, 54),
                    trackId: '15041007',
                    by: 'Tony',
                    ip: '10.2.124.25',
                    customerName: 'Edwina Drake',
                    orderType: 'Deposite'
                }
            ];
        $scope.accountLog = (sessionStorage.getItem('accountLog') !== null)
            ? JSON.parse($scope.savedAccountLog)
            : [
            {
                timeOn: Date.now() - 120000,
                timeOff: Date.now() - 60000,
                by: 'Tony',
                ip: '10.2.124.35',
                platfrom: 'Google Chrome 56.0'

            },
            {
                timeOn: new Date(2017, 0, 28, 16, 36, 07),
                timeOff: new Date(2017, 0, 27, 16, 45, 37),
                by: 'Tony',
                ip: '10.2.124.7',
                platfrom: 'Google Chrome 56.0'
                   
            },
            {
                timeOn: new Date(2017, 0, 27, 15, 22, 07),
                timeOff: new Date(2017, 0, 27, 15, 33, 01),
                by: 'Tony',
                ip: '10.2.124.12',
                platfrom: 'Google Chrome 56.0'
            },
            {
                timeOn: new Date(2017, 0, 27, 17, 36, 07),
                timeOff: new Date(2017, 0, 27, 17, 48, 37),
                by: 'Tony',
                ip: '10.2.124.7',
                platfrom: 'Google Chrome 56.0'
            },
            {
                timeOn: new Date(2017, 0, 27, 14, 36, 08),
                timeOff: new Date(2017, 0, 27, 14, 45, 27),
                by: 'Tony',
                ip: '10.2.124.15',
                platfrom: 'Google Chrome 56.0'
            },
            {
                timeOn: new Date(2017, 0, 25, 21, 22, 37),
                timeOff: new Date(2017, 0, 27, 21, 25, 49),
                by: 'Tony',
                ip: '70.24.254.102',
                platfrom: 'Safari 10.0.1'
            }
        ];

        sessionStorage.setItem('orderLog', JSON.stringify($scope.orderLog));
        sessionStorage.setItem('orders', JSON.stringify($scope.orders));
        sessionStorage.setItem('accountLog', JSON.stringify($scope.accountLog));

        $scope.sortBy = 'date';
        $scope.user = 'Tony';
        $scope.sortReverse = true;
        $scope.searchOrders = '';
        $scope.selectedDate = '';
        $scope.selectedType = '';
        $scope.selectedStatus = '';
        $scope.prevatt = "disabled";
        $scope.nextatt = 'waves-effect';
        $scope.orderSize = $scope.orders.length;
        $scope.pageNum = 1;
        $scope.pageSize = 20;
        $scope.orderIndex = $scope.pageSize;
        $scope.currentOrders = [];
        $scope.loaded = false;
        $scope.side = [];
        $scope.countPending = 0;

        $scope.side[3] = 'background-color: #E0E0E0';
        $scope.side[5] = 'background-color: #E0E0E0';
        $scope.side[8] = 'background-color: #E0E0E0';

        if ($scope.pageSize > $scope.orderSize) {
            $scope.currentOrders = $scope.orders;
            $scope.loaded = true;
        } else {
            for (var i = 0; i < $scope.pageSize; i++) {
                $scope.currentOrders.push($scope.orders[i]);
            }
        }
        
        
        // functions        
        $scope.clearOrders = function() {
            var oldOrders = $scope.orders;
            $scope.orders = [];
            angular.forEach(oldOrders,
                function(order) {
                    if (!order.selected)
                        $scope.orders.push(order);
                });
            sessionStorage.setItem('orders', JSON.stringify($scope.orders));
        };

        $scope.selectAll = function(bool) {
            angular.forEach($scope.filteredOrders,
                function(order) {
                    order.selected = bool;
                });
        }

        $scope.ifSelected = function() {
            for (var i = 0; i < $scope.orders.length; i++) {
                if ($scope.orders[i].selected) {
                    return true;
                }
            }
        }

        $scope.chooseDate = function(date) {
            $scope.selectedDate = date;
            $scope.clearStyle(1);
            if (date === '')
                $scope.side[5] = 'background-color: #E0E0E0';
            else
                $scope.side[4] = 'background-color: #E0E0E0';

        }

        $scope.chooseType = function(type) {
            $scope.selectedType = type;
            $scope.clearStyle(2);
            if (type === 'Credit Card')
                $scope.side[6] = 'background-color: #E0E0E0';
            if (type === 'Bank Account')
                $scope.side[7] = 'background-color: #E0E0E0';
            if (type === '')
                $scope.side[8] = 'background-color: #E0E0E0';
        }

        $scope.chooseStatus = function(status) {
            $scope.selectedStatus = status;
            $scope.clearStyle(0);
            if (status === 'Pending')
                $scope.side[0] = 'background-color: #E0E0E0';
            if (status === 'Accepted')
                $scope.side[1] = 'background-color: #E0E0E0';
            if (status === 'Rejected')
                $scope.side[2] = 'background-color: #E0E0E0';
            if (status === '')
                $scope.side[3] = 'background-color: #E0E0E0';
        }

        $scope.showDetails = function (id, ev) {
            if (confirm("You are accessing sensitive user data, your action will be logged.")) {
                
                var selectedOrder = $filter('filter')($scope.orders, { trackId: id })[0];
                $scope.logging(selectedOrder, $scope.user);
                sessionStorage.setItem('selectedOrder', JSON.stringify(selectedOrder));
                //$scope.details(ev);
                details = window.open('details.html');
            }
        }
            
        $scope.acceptSelected = function (id) {
            if (id === 'batch') {
                for (i = 0; i < $scope.orders.length; i++) {
                    if ($scope.orders[i].selected) {
                        $scope.orders[i].status = 'Accepted';
                        $scope.orders[i].selected = false;
                    }
                }
            } else {
                for (i = 0; i < $scope.orders.length; i++) {
                    if ($scope.orders[i].trackId === id) {
                        $scope.orders[i].status = 'Accepted';
                        break;
                    }
                }
            }
            sessionStorage.setItem('orders', JSON.stringify($scope.orders));
            $scope.bool = false;
            $scope.updateBadge();
            $scope.changesDialog();
        }

        $scope.rejectSelected = function (id) {
            $scope.changesDialog();
            for (i = 0; i < $scope.orders.length; i++) {
                if ($scope.orders[i].trackId === id) {
                    $scope.orders[i].status = 'Rejected';
                    break;
                }
            }
            sessionStorage.setItem('orders', JSON.stringify($scope.orders));
            $scope.bool = false;
            
        }
        
        $scope.logging = function (order, user) {

            var entry = {
                time: Date.now(),
                trackId: order.trackId,
                by: user,
                ip: '10.2.35.26',
                customerName: order.customerName,
                orderType: order.orderType
            }

            var savedLog = sessionStorage.getItem('orderLog');
            savedLog = JSON.parse(savedLog);
            savedLog.push(entry);
            $scope.orderLog = savedLog;
            
            sessionStorage.setItem('orderLog', JSON.stringify($scope.orderLog));
        }

        $scope.changesDialog = function() {
            Materialize.toast('Changes Applied', 4000);
        };

        $scope.clearStyle = function(group) {
            switch (group) {
                case 0:
                    for (var i = 0; i < 4; i++)
                        $scope.side[i] = '';
                    break;
                case 1:
                    for (var i = 4; i < 6; i++)
                        $scope.side[i] = '';
                    break;
                case 2:
                    for (var i = 6; i < 9; i++)
                        $scope.side[i] = '';
                    break;
                default:
                    alert('error!');
            }
        }
        
        $scope.clearFilters = function () {
            $scope.selectedDate = '';
            $scope.searchOrders = '';
            $scope.selectedStatus = '';
        }

        $scope.print = function() {
            angular.forEach($scope.filteredOrders,
                function(order, index) {
                    console.log(order.customerName + " " + index);
                });
        }

        $scope.loadMore = function () {
            // orders to be pushed for each scroll down
            var step = 10;
            var nextStep = $scope.orderIndex + step;
            if (nextStep > $scope.orderSize) {
                nextStep = $scope.orderSize;
                $scope.loaded = true;
            }
            $scope.$apply(function() {
                for (var i = $scope.orderIndex; i < nextStep; i++) {
                    $scope.currentOrders.push($scope.orders[i]);
                }
            });
            $scope.orderIndex = nextStep;
            console.log('loaded');
            
        }

        $scope.scrollToEndContainer = function (dir) {
            $scope.loadMore();
        };

        $scope.updateBadge = function () {
            $scope.countPending = 0;
            for (var i = 0; i < $scope.orders.length; i++) {
        	if ($scope.orders[i].status === 'Pending') 
        		$scope.countPending ++;        	
            }
        }
        $scope.updateBadge();

        $scope.details = function (ev) {

            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialogs/details.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            }).then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
                $scope.status = 'You cancelled the dialog.';
            });
        }

        function DialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }

    }
]);


app.controller('detailsController', ['$scope', function($scope) {

	var selectedOrder = sessionStorage.getItem('selectedOrder');
	$scope.selectedOrder = JSON.parse(selectedOrder);
	$scope.selectedOrder.credit = '4505833015542447';
	$scope.selectedOrder.expiry = '07/12';
	$scope.selectedOrder.type = 'VISA';
	$scope.selectedOrder.address = '7583 Peak Drive';
	$scope.selectedOrder.city = 'Whistler';
	$scope.selectedOrder.province = 'BC';
	$scope.selectedOrder.postalCode = 'V0N 1B8';
	console.log($scope.selectedOrder);

    $scope.close = function() {
        self.close();
    }

}]);


app.controller('adminController',
[
    '$scope', '$mdDialog', function ($scope, $mdDialog) {
        $scope.theme = 'blue-grey';

        var newKeyPropt = '';
        $scope.newKey = function(ev) {

            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialogs/newKey.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
            })
            .then(function (answer) {
                $scope.status = 'You said the information was "' + answer + '".';
            }, function () {
            $scope.status = 'You cancelled the dialog.';
            });
        }

        function DialogController($scope, $mdDialog) {
            $scope.hide = function () {
                $mdDialog.hide();
            };

            $scope.cancel = function () {
                $mdDialog.cancel();
            };

            $scope.answer = function (answer) {
                $mdDialog.hide(answer);
            };
        }
    }
]);


// Filter orders by date
app.filter('filterDate', function() {
	return function(input, selectedDate) {
		if (selectedDate === '') {
			return input;
		}
		else {
			var orders = [];
			selectedDate = Date.parse(selectedDate);
			angular.forEach(input, function(obj) {
				var date = Date.parse(obj.date);
				if (date === selectedDate) {
					orders.push(obj);
				}
			});
			return orders;
		}
	};
});

app.filter('filterType', function () {
    return function (input, selectedType) {
        if (selectedType === '') {
            return input;
        }
        else {
            var orders = [];
            angular.forEach(input, function (obj) {
                var type = obj.orderType;
                if (type === selectedType) {
                    orders.push(obj);
                }
            });
            return orders;
        }
    };
});

app.filter('filterStatus', function () {
    return function (input, selectedStatus) {
        if (selectedStatus === '') {
            return input;
        }
        var orders = [];
        angular.forEach(input, function (obj) {
            if (obj.status === selectedStatus) {
                orders.push(obj);
            }
        });
        return orders;
    };
});

app.filter('filterPending', function() {
	return function(input) {
		var orders = [];
		angular.forEach(input, function(obj) {
			if (obj.status === 'Pending') {
				orders.push(obj);
			}
		});
		return orders;
	};
});

app.filter('filterRejected', function() {
	return function(input) {
		var orders = [];
		angular.forEach(input, function(obj) {
			if (obj.status === 'Rejected') {
				orders.push(obj);
			}
		});
		return orders;
	};
});

app.filter('filterAccepted', function() {
	return function(input) {
		var orders = [];
		angular.forEach(input, function(obj) {
			if (obj.status === 'Accepted') {
				orders.push(obj);
			}
		});
		return orders;
	};
});



// Load jQuery for MaterializeCss elements
$(document).ready(function() {
	$(".dropdown-button").dropdown();
	$(".button-collapse").sideNav();
	$('select').material_select();
	
	var $input = $('.datepicker').pickadate({
		format: 'yyyy/mm/dd',
	    selectMonths: true, // Creates a dropdown to control month
	    selectYears: 15, // Creates a dropdown of 15 years to control year
		onSet: function (event) {
			if (event.select) {
			    this.close();
			}
		},
		onClose: function() {
		    $('.datepicker').blur();
		}
	});
});
