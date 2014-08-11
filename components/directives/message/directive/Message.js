angular
    .module('asvook')
    .directive('message', function(){
        return {
            restrict: 'E',
            require: '^ngModel',
            scope: {
                message : '=ngModel'
            },
            templateUrl: 'components/directives/message/template/message.html'
        };
    });
