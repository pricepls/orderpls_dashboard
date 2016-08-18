orderpls.service('commonService',['$cookies',function($cookies){

    this.saveToken=function(token,name){
        $cookies.put('token',token);
        $cookies.put('b_name',name);
        return true;
    }
    this.getToken = function(){
        var token = $cookies.get('token');
        return token;
    }
    this.removeToken = function(){
        $cookies.put('token',"");
        return true;
    }
    this.isloginValid = function(){

        var token = $cookies.get('token');
        if(token !== null &&  token!==undefined)
            return true;
        else
            return false;
    }


}]);