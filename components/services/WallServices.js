angular
    .module('asvook')
    .factory('WallServices', function ($http, servicesUrl, Session, $resource, $q) {
        var instance = {
            getWall: function (page, userName, sort) {
                return $http
                    .get(servicesUrl + (!!userName ? 'user/' + userName : ('wall' + (sort === 'relevance' ? '/by-relevance' : ''))) + '/' + (page || 1))
                    .then(function (response) {
                        return response.data;
                    });
            },

            addLike: function (message, increment) {
                return $http
                    .post(servicesUrl + 'likes', { status: message.id, increment: increment})
                    .then(function (response) {
                        return response.data;
                    });
            },

            getMessageWithComments: function (id) {
                cancelPreviousRequest();

                return $http
                    .get(servicesUrl + 'comments/' + id)
                    .then(function (response) {
                        return response.data;
                    });
            },

            sendPost: function (post) {
                Session.setUserName(post.author);

                return $http
                    .post(servicesUrl + 'wall', post)
                    .then(function (response) {
                        return response.data;
                    });
            },

            sendComment: function (comment) {
                Session.setUserName(comment.author);

                return $http
                    .post(servicesUrl + 'comments/' + comment.status, comment)
                    .then(function (response) {
                        return response.data;
                    });
            },

            createPost: function () {
                return {
                    author: Session.getUserName(),
                    text: null
                };
            },

            createComment: function (post) {
                return {
                    author: Session.getUserName(),
                    text: null,
                    status: post.id
                }
            }
        };

        return instance
    });
