angular.module('myApp', [
    'myApp.controllers'
    ]);


angular.module('myApp').run(function($rootScope){
    $rootScope.titulo="JAreina Angular";
    $rootScope.nombreRootScope ="ROOT SCOPE";
})