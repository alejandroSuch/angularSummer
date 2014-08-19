angular
    .module('asvook')
    .controller('WallCtrl', function ($scope, $routeParams, WallServices) {
        $scope.showForm = true;

        if(!!$routeParams.userName) {
            $scope.showForm = false;
            $scope.userName = $routeParams.userName;
        }

        var createNewMessage = function () {
            $scope.newMessage = WallServices.createPost();
        };

        WallServices.getWall($routeParams.userName).then(function (messages) {
            $scope.messages = messages;
        });

        $scope.sendMessage = function () {
            WallServices
                .sendPost($scope.newMessage)
                .then(function (message) {
                    $scope.messages.unshift(message);
                    createNewMessage();
                });
        };

        createNewMessage();
    });
