'use strict';

angular.module('myApp', [
    'myApp.controllers',
    'ngRoute'
    ]);


angular.module('myApp').run(function($rootScope){
    $rootScope.titulo="JAreina Angular";
    $rootScope.nombreRootScope ="ROOT SCOPE";
});


//RUTAS
angular.module('myApp').config(['$locationProvider','$routeProvider',
  function($locationProvider,$routeProvider){

            $locationProvider.hashPrefix('!');

            $routeProvider
            .when('/view1',{
                                controller:'Controller1',
                                templateUrl:'./partials/view1.html'
            })
            .when('/view2',{
                        controller: 'Controller2',
                        templateUrl: './partials/view2.html'
            });
}]);