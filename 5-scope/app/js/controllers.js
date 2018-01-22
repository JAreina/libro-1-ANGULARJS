angular.module('myApp.controllers', [])
    .controller('jareina1', function($scope) {

$scope.editorial="Editorial Mundial";
$scope.tipo= "web development";
$scope.nombre="Mundo";

})
 .controller('jareina2', function($scope) {

$scope.libros = [
    'libro 1',
    'libro 2',
    'libro 3',
    'libro 4',
]
$scope.nombre="scope de jareina2"
});