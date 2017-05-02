var app = angular.module('mpLoginApp', []);

app.controller('loginController', ['$scope', '$location', function ($scope, $location) {

    //$locationProvider.html5Mode(true).hashPrefix('*');

    var para = $location.url();

    $scope.errMsg = "";

    if (para === "/auto") {
        $scope.errMsg = "Logged in!";
    }

    $scope.loginUser = function (username, password, keeplogin) {

        if (!(username === "tony" || username === "admin") || password.length < 8) {
            console.log("Invalid Username");
            $scope.errMsg = "Invalid username / password";
        }

        else {

            if (username === "admin") {
                location.assign("admin.html");
            } else
                location.assign("orders.html");
        }

    };

    $scope.resetUser = function () {
        $scope
            .errMsg = 'An email has been sent to the email address you provided with instructions.';
    }

}]);

$(document).ready(function () {
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
        onClose: function () {
            $('.datepicker').blur();
        }
    });
});