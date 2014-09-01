angular
    .module('components.spinner', [])
    .directive('spinner', function () {
        return {
            restrict: 'E',
            templateUrl: 'components/directives/spinner/template/spinner.html'
        };
    });
