orderpls.directive('displayChilds',function(){

        return {
            restrict : 'C',
            link: function(scope, element) {
                $scope.watch('showChild',function(newVal){
                    console.log(newVal);
                    if(angular.element('ul').hasChildNodes()){

                        if (newVal === true) {
                            element.css('display', 'block');
                        } else {
                            element.css('display', 'none');
                        }
                        return;
                    }
                })
            }
        }
    }
    )
