angular
    .module('asvook')
    .factory('WallServices', function($http, servicesUrl){
        var instance = {
            getWall : function(){
                return $http
                    .get(servicesUrl + 'wall')
                    .then(function(response){
                        return response.data;
                    })
                    .catch(function(){
                        console.log('error!!', arguments);
                    })
                    .finally(function(){

                    });

            }
        };

        return instance
    });
