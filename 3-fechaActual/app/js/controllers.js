angular.module('myApp.controllers', [])
    .controller('jareina', function($scope) {

        $usuario="";
        $scope.now=new Date(); //set the model 'now' on scope
        
        $scope.greeting="HOLA";
        $scope.helloMessages=['Hello', 'Bonjour', 'Hola', 'Ciao',
    'Hallo'];


    $scope.greeting = $scope.helloMessages[0];
$scope.getRandomHelloMessage = function() {
            $scope.greeting = $scope.helloMessages[parseInt((Math.random()
            * $scope.helloMessages.length))];
            }

});