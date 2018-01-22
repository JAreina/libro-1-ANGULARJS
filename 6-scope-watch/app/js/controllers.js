angular.module('myApp.controllers', [])
    .controller('jareina1', function($scope) {

$scope.editorial="Editorial Mundial";
$scope.tipo= "web development";
$scope.nombre="Mundo";


$scope.addAMiLista=function(libro){
    $scope.contador++;
    };
    $scope.contador=0;

                                               //funccion listener
   var listener= $scope.$watch('contador',function(newValue,oldValue){
    console.log('called '+newValue+' times');
    if(newValue==2){
    alert('Great! You have 2 items in your wish list. Time to buy what you love. ');
    
// para dejar de escuchar
listener()
}

    
    });

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