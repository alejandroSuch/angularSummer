angular
    .module('asvook')
    .filter('timeAgo', function(){
        return function(input){
            return $.timeago(new Date(input));
        };
    });
