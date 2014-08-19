angular
    .module('asvook')
    .factory('WallServices', function ($http, servicesUrl, Session, $resource, $q) {
        var instance = {
            getWall: function (userName) {
                return $http
                    .get(servicesUrl + (!!userName? 'user/' + userName : 'wall'))
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

            sendComment: function (comment) {
                Session.setUserName(comment.author);

                return $http
                    .post(servicesUrl + 'comments/' + comment.status, comment)
                    .then(function (response) {
                        return response.data;
                    })
                    .catch(function () {
                        console.log('error!!', arguments);
                    })
                    .finally(function () {

                    });
            },

            createPost: function () {
                return {
                    author: Session.getUserName(),
                    text: null
                };
            },

            createComment: function(post) {
                return {
                    author: Session.getUserName(),
                    text: null,
                    status: post.id
                }
            }
        };

        return instance
    });
