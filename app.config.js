angular
    .module('asvook')
    .config(function ($routeProvider) {
        console.log('config');
        $routeProvider
            .when('/wall', {
                templateUrl: 'wall/views/wall.html',
                controller: 'WallCtrl'
            })
            .when('/comments/:id', {
                templateUrl: 'comments/views/comments.html',
                controller: 'CommentsCtrl'
            })
            .otherwise({ redirectTo: '/wall' })
    });
