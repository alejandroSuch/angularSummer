angular
    .module('asvook')
    .directive('message', function () {
        return {
            restrict: 'E',
            require: '^ngModel',
            scope: {
                message: '=ngModel',
                isComment : '='
            },
            templateUrl: 'components/directives/message/template/message.html',
            controller: function ($scope, WallServices, $location, appRoutes) {
                $scope.alreadyLikes = false;
                $scope.like = function () {
                    var increment = 1;
                    if ($scope.alreadyLikes) {
                        increment = -1;
                    }

                    WallServices
                        .addLike($scope.message, increment)
                        .then(function () {
                            $scope.alreadyLikes = !$scope.alreadyLikes;
                            $scope.message.counters.likesCount += increment;
                        });
                };

                $scope.comment = function(){
                    $location.path(appRoutes.comments + $scope.message.id);
                };
            }
        };
    });
