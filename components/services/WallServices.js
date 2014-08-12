angular
    .module('asvook')
    .factory('WallServices', function ($http, servicesUrl, Session) {
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

            getMessageWithComments: function (id) {
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
            },

            sendPost: function (post) {
                Session.setUserName(post.author);

                return $http
                    .post(servicesUrl + 'wall', post)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function () {
                        console.log('error!!', arguments);
                    })
                    .finally(function () {

                    });
            },

            sendComment: function (post) {
                Session.setUserName(post.author);
            },

            createPost: function () {
                return {
                    author: Session.getUserName(),
                    text: null
                };
            }
        };

        return instance
    });
