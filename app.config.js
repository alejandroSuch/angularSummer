angular
    .module('asvook')
    .config(function ($routeProvider) {
        console.log('config');
        $routeProvider
            .when('/wall', {
                templateUrl: 'wall/views/wall.html',
                controller: 'WallCtrl'
            })
            .otherwise({ redirectTo: '/wall' })
    });
