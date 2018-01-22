angular.module('myApp.controllers', [])
    .controller('jareina1', function($scope,$timeout) {


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
    $scope.message = 'Fetched after 3 seconds con $apply';
    //will reflect in view
    console.log('message=' + $scope.message);

    });
    }, 3000);
    }


    /***********con $timeout */

    $scope.scheduleTask2 = function() {
        $timeout(function() {
        $scope.message2 = 'Fetched after 3 seconds con $timeout'; //just update.No need for $apply
        console.log('message=' + $scope.message2);
        }, 3000);
        }
})
