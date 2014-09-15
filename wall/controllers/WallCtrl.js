angular
    .module('asvook')
    .controller('WallCtrl', function ($scope, $routeParams, WallServices) {
        $scope.showForm = true;
        $scope.currentPage = 1;
        $scope.wallSort = { value : 'date'};
        $scope.getWallError = false;

        if (!!$routeParams.userName) {
            $scope.showForm = false;
            $scope.userName = $routeParams.userName;
        }

        var createNewMessage = function () {
            $scope.newMessage = WallServices.createPost();
        };

        var getWall = function () {
            console.log('getting wall');
            $scope.getWallError = false;
            $scope.messages = [];
            $scope.loading = true;
            WallServices
                .getWall($scope.currentPage, $routeParams.userName, $scope.wallSort.value)
                .then(function (result) {
                    if(!!result) {
                        $scope.messages = result.statusUpdates;
                        $scope.pageCount = result.pageCount;
                        $scope.getWallError = false;
                    }
                })
                .catch(function(){
                    console.log('habemus error')
                    $scope.getWallError = true;
                })
                .finally(function(){
                    $scope.loading = false;
                });
        };

        $scope.sendMessage = function () {
            $scope.createMessageError = false;
            $scope.sendingMessage = true;
            WallServices
                .sendPost($scope.newMessage)
                .then(function (message) {
                    $scope.messages.unshift(message);
                    createNewMessage();
                })
                .catch(function(){
                    $scope.createMessageError = true;
                })
                .finally(function(){
                    $scope.sendingMessage = false;
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

        $scope.reload = function(){
            getWall();
        };

        createNewMessage();
        getWall();

        if(!$routeParams.userName) {
            $scope.$watch('wallSort.value', function(oldVal, newVal){
                if(oldVal !== newVal && !!oldVal) {
                    $scope.currentPage = 1;
                    getWall();
                }
            });
        }
    });
