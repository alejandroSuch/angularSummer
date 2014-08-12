angular
    .module('asvook')
    .config(function ($routeProvider) {
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
