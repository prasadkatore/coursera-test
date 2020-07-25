(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {

$scope.name = "";
    $scope.wordCounter = function() {

const myString = $scope.name;
const splits = myString.split(' ');


if(!$scope.name)
{
  $scope.answer="Please enter data first";
}

else if (splits.length >3) {
  $scope.answer=  ("Too much!");
}
else if (splits.length <=3) {
  $scope.answer=  ("Enjoy!");
}



    };


});

})();
