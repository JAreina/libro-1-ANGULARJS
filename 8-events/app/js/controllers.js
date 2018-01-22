angular.module('myApp.controllers', [])
    .controller('mensajesController', function($scope,$timeout) {

$scope.mensajes=[{

    envia:'usuario1',
    texto: 'mensaje uno'

}];

var tiempo;
var contador =0;

$scope.cargarMensajes= function(){
    contador++;
    $scope.mensajes.push({
        envia:'usuario1',
        texto:"aletorio mensaje"+contador
    })
    tiempo = $timeout($scope.cargarMensajes,2000);

    if (contador ===3){
  
      // lanza evento
        $scope.$broadcast('NO HAY MÁS DATOS',"no conectado")
        $timeout.cancel(tiempo);
    }
  
   
   
}
tiempo = $timeout($scope.cargarMensajes,2000);
 // escuchador de un evento del otro controlador 
 $scope.$on('EVENTO RECIBIDO', function(){
    console.log("RECIBIDO EVENTO EMITIDO POR estadoController")
})
})
 .controller('estadoController', function($scope) {

    $scope.nombre = "mundo";
    $scope.status = "CONECTADO";
    $scope.statusColor ="verde";

    //escuchador de eventos para mensajesController
    $scope.$on('NO HAY MÁS DATOS',function(event){
        console.log('recibido en estado controller evento broadcasted');
        $scope.status = "no CONECTADO";
    $scope.statusColor ="rojo";
    //emitir evento para contestar
    $scope.$emit('EVENTO RECIBIDO');

    })

});