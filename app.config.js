angular
    .module('asvook')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/wall', {
                templateUrl: 'wall/views/wall.html',
                controller: 'WallCtrl'
            })
            .when('/user/:userName', {
                templateUrl: 'wall/views/wall.html',
                controller: 'WallCtrl'
            })
            .when('/comments/:id', {
                templateUrl: 'comments/views/comments.html',
                controller: 'CommentsCtrl',
                resolve: {
                    message : function($route, $location, WallServices, appRoutes){
                        var id = $route.current.params.id;

                        if (!/^\d.*$/.test(id)) {
                            $location.path(appRoutes.wall);
                            return;
                        }

                        return  WallServices.getMessageWithComments(id);
                    }
                }
            })
            .otherwise({ redirectTo: '/wall' })
    });
