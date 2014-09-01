angular
    .module('components.pagination', [])
    .directive('paginator', function () {
        return {
            restrict: 'E',
            scope: {
                pageCount: '=',
                currentPage: '=',
                onPageClick: '&',
                prev: '&',
                next: '&'
            },
            templateUrl: 'components/directives/paginator/template/paginator.html',

            controller: function ($scope) {
                $scope.updatePager = function () {
                    $scope.range = [$scope.currentPage];

                    var aux = $scope.currentPage;
                    var count = 0;
                    while (aux > 1 && count < 3) {
                        aux--;
                        count++;
                        $scope.range.unshift(aux);
                    }

                    aux = $scope.currentPage;
                    count = 0;
                    while (aux < $scope.pageCount && count < 3) {
                        aux++;
                        count++;
                        $scope.range.push(aux);
                    }
                };

                $scope.itemClicked = function (page) {
                    $scope.onPageClick({$page: page});
                };
            },

            link: function (scope, element, attributes) {
                scope.$watch('currentPage', function(){
                    scope.updatePager();
                });

                scope.$watch('pageCount', function(){
                    scope.updatePager();
                });
            }
        };
    });
