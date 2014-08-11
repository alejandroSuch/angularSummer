angular
    .module('asvook')
    .controller('WallCtrl', function($scope, WallServices){
        console.log('WallCtrl')
        WallServices.getWall().then(function(messages){
            $scope.messages = messages;
        });
    });
