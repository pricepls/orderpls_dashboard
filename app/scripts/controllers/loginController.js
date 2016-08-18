orderpls.controller('loginController', ['$scope','$location', 'loginService','commonService', function ($scope, $location,loginService,commonService) {

    $scope.user_email = null;
    $scope.user_pass = null;

    $scope.validateLogin = function () {

        var postData = {
            user_email: $scope.user_email,
            user_pass: $scope.user_pass
        };

        loginService.login({}, postData,
            function success(response) {

                var status = response.status;
                if(status.toLowerCase() == "success"){
                    commonService.saveToken(response.response_data.token,response.response_data.name);
                    $location.path('/home');
                }else{
                    $scope.error = response.error_msg;

                }
            },
            function error(error) {
                $scope.error = error;
            }
        );

    }




}]);