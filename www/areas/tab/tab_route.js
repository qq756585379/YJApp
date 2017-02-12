
// tab路由模块
angular.module('tab.route', [])
  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('tab', {
        url: '/tab',
        //抽象路由不会单独被渲染在页面上，必须加上子路由
        abstract: true,
        templateUrl: 'areas/tab/tabs.html'
      })

  });
