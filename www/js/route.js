
//路由模块
angular.module('route', ['guidePage.route','tab.route','guidePage.route', 'home.route','category.route', 'goodsList.route','details.route'])

  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/guidePage');

  });
