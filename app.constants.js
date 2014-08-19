angular
    .module('asvook')
//    .constant('servicesUrl', 'http://localhost:8080/falb/')
    .constant('servicesUrl', 'http://localhost:9000/services/')
    .factory('appRoutes', function () {
        return {
            wall: '/wall/',
            comments: '/comments/'
        }
    });
