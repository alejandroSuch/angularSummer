angular
    .module('asvook')
    .directive('messageForm', function(){
        return {
            restrict : 'E',
            require: 'ngModel',
            scope : {
                submitAction : '&onMessageSubmitted',
                post : '=ngModel',
                hasError: '=',
                isLoading: '='
            },
            templateUrl : 'components/directives/form/template/message-form.html',
            compile : function(element, attrs) {
                if(attrs.isComment === "true") {
                    $('h4', element).text('Añadir comentario');
                } else {
                    $('h4', element).text('Nuevo mensaje');
                }
            }
        }
    });
