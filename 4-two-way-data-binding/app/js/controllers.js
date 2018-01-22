angular.module('myApp.controllers', [])
    .controller('jareina', function($scope) {


        // propiedades del controlador
        this.usuario="";
        this.now=new Date(); 
        this.greeting="HOLA";
        this.helloMessages=['Hello', 'Bonjour', 'Hola', 'Ciao',
    'Hallo'];


    this.greeting = this.helloMessages[0];

    //function del controllador 
this.getRandomHelloMessage = function() {
            this.greeting = this.helloMessages[parseInt((Math.random()
            * this.helloMessages.length))];
            }

});