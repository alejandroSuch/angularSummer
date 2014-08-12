angular
    .module('asvook')
    .controller('WallCtrl', function ($scope, WallServices) {
        var createNewMessage = function () {
            $scope.newMessage = WallServices.createPost();
        };

        WallServices.getWall().then(function (messages) {
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
