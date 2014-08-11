angular
    .module('asvook')
    .factory('WallServices', function ($http, servicesUrl) {
        var instance = {
            getWall: function () {
                return $http
                    .get(servicesUrl + 'wall')
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function () {
                        console.log('error!!', arguments);
                    })
                    .finally(function () {

                    });
            },

            addLike: function (message, increment) {
                return $http
                    .post(servicesUrl + 'likes', { status: message.id, increment: increment})
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function () {
                        console.log('error!!', arguments);
                    })
                    .finally(function () {

                    });
            },

            getMessageWithComments : function(id) {
                return $http
                    .get(servicesUrl + 'comments/' + id)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function () {
                        console.log('error!!', arguments);
                    })
                    .finally(function () {

                    });
            }
        };

        return instance
    });
