angular
    .module('asvook')
    .controller('WallCtrl', function ($scope, $routeParams, WallServices) {
        $scope.showForm = true;
        $scope.currentPage = 1;

        if (!!$routeParams.userName) {
            $scope.showForm = false;
            $scope.userName = $routeParams.userName;
        }

        var createNewMessage = function () {
            $scope.newMessage = WallServices.createPost();
        };

        var getWall = function () {
            $scope.messages = [];
            $scope.loading = true;
            WallServices
                .getWall($scope.currentPage, $routeParams.userName)
                .then(function (result) {
                    $scope.messages = result.statusUpdates;
                    $scope.pageCount = result.pageCount;
                })
                .finally(function(){
                    $scope.loading = false;
                });
        };

        $scope.sendMessage = function () {
            WallServices
                .sendPost($scope.newMessage)
                .then(function (message) {
                    $scope.messages.unshift(message);
                    createNewMessage();
                });
        };

        $scope.next = function () {
            if ($scope.currentPage < $scope.pageCount) {
                $scope.currentPage++;
                getWall();
            }
        };

        $scope.prev = function () {
            if ($scope.currentPage > 1) {
                $scope.currentPage--;
                getWall();
            }
        };

        $scope.onPageClick = function (page) {
            if ($scope.currentPage !== page && page >= 1 && page <= $scope.pageCount) {
                $scope.currentPage = page;
                getWall();
            }
        };

        createNewMessage();
        getWall();
    });
