orderpls.controller('NavigationController',['$scope',function($scope){

    $scope.menu =[

        {
            label: 'Dashboard',
            iconClasses: 'ti ti-home',
            html: '',
            url: '/home'
        },
        {
            label: 'Reports',
            iconClasses: 'ti ti-pie-chart',
            html: '',
            url: '/sales',
        },
        {
            label: 'Orders',
            iconClasses: 'ti ti-shopping-cart-full',
            html: '',
            url: '/orders'
        },
        {
            label: 'Menu',
            iconClasses: 'ti  ti-receipt',
            html: '',
            children: [{
                label: 'Courses',
                url: '/menu_courses',
            }, {
                label: 'Sub Courses',
                url: '/menu_sub_courses'
            }, {
                label: 'Food types',
                url: '/menu_food_types'
            }]
        },
        {
            label: 'Staffs',
            iconClasses: 'ti ti-face-smile',
            html: '',
            url: '/staffs',

        },
        {
            label: 'Tables',
            iconClasses: 'ti ti-layout-grid3',
            html: '',
            url: '/tables'
        },
        {
            label: 'Payments',
            iconClasses: 'ti ti-money',
            html: '',
            url: '/payments'
        },
        {
            label: 'Account',
            iconClasses: 'ti ti-settings',
            html: '',
            url: '/settings'
        }
    ]

    var setParent = function(children, parent) {
        angular.forEach(children, function(child) {
            child.parent = parent;
            if (child.children !== undefined) {
                setParent(child.children, child);
            }
        });
    };

    $scope.findItemByUrl = function(children, url) {
        for (var i = 0, length = children.length; i < length; i++) {
            if (children[i].url && children[i].url.replace('#', '') === url) {
                return children[i];
            }
            if (children[i].children !== undefined) {
                var item = $scope.findItemByUrl(children[i].children, url);
                if (item) {
                    return item;
                }
            }
        }
    };

    setParent($scope.menu, null);

    $scope.openItems = []; $scope.selectedItems = []; $scope.selectedFromNavMenu = false;

    $scope.select = function(item) {

        console.log(item);
        if (item.open) {
            item.showNowChildren = false;
            item.open = false;
            return;
        }
        for (var i = $scope.openItems.length - 1; i >= 0; i--) {
            $scope.openItems[i].open = false;
        }
        $scope.openItems = [];
        var parentRef = item;
        while (parentRef !== null) {
            parentRef.open = true;
            $scope.openItems.push(parentRef);
            parentRef = parentRef.parent;
        }

        // handle leaf nodes
        if (!item.children || (item.children && item.children.length < 1)) {
            console.log('coming inside');
            $scope.selectedFromNavMenu = true;
            for (var j = $scope.selectedItems.length - 1; j >= 0; j--) {
                $scope.selectedItems[j].selected = false;
            }
            $scope.selectedItems = [];
            parentRef = item;
            while (parentRef !== null) {
                parentRef.selected = true;
                $scope.selectedItems.push(parentRef);
                parentRef = parentRef.parent;
            }
        }else{
            console.log("coming here iiii");
            item.showNowChildren = true;
            console.log(item.showNowChildren);
        }
    }

    $scope.$on('$routeChangeSuccess', function() {
        if ($scope.selectedFromNavMenu === false) {
            var item = $scope.findItemByUrl($scope.menu, $location.path());
            console.log(item);
            if (item) {
                $timeout(function() {
                    $scope.select(item);
                });
            }
        }
        $scope.selectedFromNavMenu = false;
    });

}]);
