angular
    .module('asvook')
    .factory('Session', function () {
        var instance = {
            getUserName : function() {
                return this.userName;
            },

            setUserName : function(userName) {
                this.userName = userName;
            }
        };

        return instance;
    });