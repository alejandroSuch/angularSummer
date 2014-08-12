angular
    .module('asvook')
    .controller('CommentsCtrl', function ($scope, $location, $routeParams, appRoutes, WallServices) {
        $scope.newMessage = WallServices.createPost();

        if (!/^\d.*$/.test($routeParams.id)) {
            $location.path(appRoutes.wall);
            return;
        }

        WallServices
            .getMessageWithComments($routeParams.id)
            .then(function(message){
                $scope.message = message;
                console.log('message', message);
            });
    });
