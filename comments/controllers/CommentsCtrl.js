angular
    .module('asvook')
    .controller('CommentsCtrl', function ($scope, $location, appRoutes, WallServices, message) {
        if (!message) {
            $location.path(appRoutes.wall);
            return;
        }

        $scope.message = message;

        var createNewComment = function(){
            $scope.newComment = WallServices.createComment(message);
        }

        $scope.sendComment = function(){
            WallServices
                .sendComment($scope.newComment)
                .then(function (comment) {
                    $scope.message.comments.unshift(comment);
                    $scope.message.counters.commentsCount++;
                    createNewComment();
                });
        };

        createNewComment();
    });
