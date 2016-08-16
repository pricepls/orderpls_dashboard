/* jshint ignore:start */
angular.module('theme.core.templates', []).run(['$templateCache', function ($templateCache) {
  'use strict';

  $templateCache.put('templates/footer_panel.html',
    "<div class=\"static-content-wrapper\">\n" +
    "    <div class=\"static-content\">\n" +
    "        <div class=\"page-content\"  class=\"mainview-animation animated\">\n" +
    "        </div> <!--wrap -->\n" +
    "    </div>\n" +
    "    <footer role=\"contentinfo\" ng-show=\"!layoutLoading\" ng-cloak>\n" +
    "        <div class=\"clearfix\">\n" +
    "            <ul class=\"list-unstyled list-inline pull-left\">\n" +
    "                <li><h6 style=\"margin: 0;\">&copy; 2015 Avenxo</h6></li>\n" +
    "            </ul>\n" +
    "            <button class=\"pull-right btn btn-link btn-xs hidden-print\" back-to-top><i class=\"ti ti-arrow-up\"></i></button>\n" +
    "        </div>\n" +
    "    </footer>\n" +
    "</div>"
  );


  $templateCache.put('templates/nav_renderer.html',
    "<span ng-if=\"item.separator==true\">{{item.label}}</span>\n" +
    "<a ng-if=\"!item.separator\" ng-click=\"select(item)\" ng-href=\"{{item.url}}\">\n" +
    "    <i ng-if=\"item.iconClasses\" class=\"{{item.iconClasses}}\"></i><span>{{item.label}}</span>\n" +
    "    <span ng-bind-html=\"item.html\"></span>\n" +
    "</a>\n" +
    "<ul ng-if=\"item.children.length\" >\n" +
    "    <li ng-repeat=\"item in item.children\"\n" +
    "        ng-class=\"{ hasChild: (item.children!==undefined),\n" +
    "                      active: item.selected,\n" +
    "                        open: (item.children!==undefined) && item.open,\n" +
    "              'search-focus': (searchQuery.length>0 && item.selected) }\"\n" +
    "        ng-show=\"!(searchQuery.length>0 && !item.selected)\"\n" +
    "        ng-include=\"'views/templates/nav_renderer.html'\"\n" +
    "            ></li>\n" +
    "</ul>"
  );


  $templateCache.put('templates/nav_renderer_horizontal.html',
    "<a  ng-click=\"select(item)\"  ng-href=\"{{item.url}}\">\n" +
    "    <i ng-if=\"item.iconClasses\" class=\"{{item.iconClasses}}\"></i><span>{{item.label}}</span>\n" +
    "</a>\n" +
    "<ul  ng-if=\"item.showNowChildren\" style=\"display: block\"  ng-if=\"item.children.length\" >\n" +
    "    <li ng-repeat=\"item in item.children\"\n" +
    "        ng-class=\"{ hasChild: (item.children!==undefined),\n" +
    "        \t\t\t  active: item.selected,\n" +
    "\t\t\t\t\t\topen: (item.children!==undefined) && item.open,\n" +
    "\t\t\t\t\t\t }\"\n" +
    "        ng-include=\"'views/templates/nav_renderer_horizontal.html'\"\n" +
    "\n" +
    "            ></li>\n" +
    "</ul>\n"
  );


  $templateCache.put('templates/side_panel.html',
    "<div class=\"static-sidebar-wrapper sidebar-default\">\n" +
    "    <div class=\"static-sidebar\" style=\"top: 56px;\">\n" +
    "        <div class=\"sidebar\">\n" +
    "            <div class=\"widget\">\n" +
    "                <div class=\"widget-body\" style=\"height: 140px\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"widget stay-on-collapse\">\n" +
    "\n" +
    "                <nav class=\"widget-body\">\n" +
    "                    <ul ng-controller=\"NavigationController\" class=\"acc-menu\">\n" +
    "\n" +
    "                        <li ng-repeat=\"item in menu\"\n" +
    "                            ng-if=\"!(item.hideOnHorizontal||item.separator)\"\n" +
    "                            ng-class=\"{ hasChild: (item.children!==undefined),\n" +
    "\t\t\t\t\t\t\t\t\t\tactive: item.selected,\n" +
    "\t\t\t\t\t\t\t\t\t\t  open: (item.children!==undefined) && item.open,\n" +
    "\t\t\t\t\t\t\t   'nav-separator': item.separator==true }\"\n" +
    "                            ng-include=\"'views/templates/nav_renderer_horizontal.html'\"\n" +
    "                                ></li>\n" +
    "\n" +
    "\n" +
    "                    </ul>\n" +
    "\n" +
    "                </nav>\n" +
    "\n" +
    "            </div>\n" +
    "\n" +
    "            <div class=\"widget\" id=\"widget-progress\" ng-cloak>\n" +
    "                <div class=\"widget-heading\">\n" +
    "                    Progress\n" +
    "                </div>\n" +
    "                <div class=\"widget-body\">\n" +
    "\n" +
    "                    <div class=\"mini-progressbar\">\n" +
    "                        <div class=\"clearfix mb-sm\">\n" +
    "                            <div class=\"pull-left\">Bandwidth</div>\n" +
    "                            <div class=\"pull-right\">50%</div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"progress\">\n" +
    "                            <div class=\"progress-bar progress-bar-lime\" style=\"width: 50%\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <div class=\"mini-progressbar\">\n" +
    "                        <div class=\"clearfix mb-sm\">\n" +
    "                            <div class=\"pull-left\">Storage</div>\n" +
    "                            <div class=\"pull-right\">25%</div>\n" +
    "                        </div>\n" +
    "\n" +
    "                        <div class=\"progress\">\n" +
    "                            <div class=\"progress-bar progress-bar-info\" style=\"width: 25%\"></div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<!--\n" +
    "\n" +
    "\n" +
    "\n" +
    "        ng-include=\"'pages/templates/nav_renderer_horizontal.html'\"\n" +
    "            ></li>\n" +
    "</ul>-->\n"
  );
}])
/* jshint ignore:end */