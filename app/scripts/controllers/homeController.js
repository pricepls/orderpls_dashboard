orderpls.controller('homeController',['$scope','$location','commonService',function($scope,$location,commonService){

    if(!commonService.isloginValid()){
        $location.path('/login');
    }

    $scope.layoutLoading=false;


}]);