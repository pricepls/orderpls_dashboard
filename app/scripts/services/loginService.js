orderpls.factory('loginService', ['$resource', function ($resource) {


    return $resource('http://localhost:8888/api/v1/login', {}, {
        login: {method: 'POST', cache: false, isArray: false}
    })

}]);