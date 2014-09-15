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
            if($scope.sendingMessage) {
                return;
            }

            $scope.createMessageError = false;
            $scope.sendingMessage = true;
            WallServices
                .sendComment($scope.newComment)
                .then(function (comment) {
                    $scope.message.comments.unshift(comment);
                    $scope.message.counters.commentsCount++;
                    createNewComment();
                })
                .catch(function(){
                    $scope.createMessageError = true;
                })
                .finally(function(){
                    $scope.sendingMessage = false;
                });
        };

        createNewComment();
    });
