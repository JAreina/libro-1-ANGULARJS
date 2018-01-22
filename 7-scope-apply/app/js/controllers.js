angular.module('myApp.controllers', [])
    .controller('jareina1', function($scope) {


        /**********************
         * NO ACTUALIZA el message en la vista
         
        $scope.scheduleTask = function() {
            setTimeout(function() {
            $scope.message = 'Fetched after 3 seconds';
            console.log('message='+$scope.message); //log this to console
            }, 3000);
            }
*/

/*************************
 *  
 * con apply se actualiza */
$scope.scheduleTask = function() {
    setTimeout(function() {

    $scope.$apply(function() { // wrapped the code in $apply()
    $scope.message = 'Fetched after 3 seconds';
    //will reflect in view
    console.log('message=' + $scope.message);

    });
    }, 3000);
    }
})
