(function () {
'use strict';

angular.module('lunchcheck', [])
.controller('lunchcontroller', lunchfun);

lunchfun.$inject = ['$scope'];
function lunchfun($scope) {
  $scope.list='';
  $scope.list1=[''];
  $scope.message='';
  $scope.obj={ };
  $scope.obj1={ };

  $scope.print=function()
  {
    $scope.list1=$scope.list.split(",");
    $scope.list1=$scope.list1.filter(function(ide){return ide!="";})
    if($scope.list1.length ==0 )
    {
        $scope.message="Please Enter the data first ";
        $scope.obj.color="red";
        $scope.obj1.border="2px solid red";
    }
    else if($scope.list1.length <=3){
        $scope.message="Enjoy!";
        $scope.obj.color="green";
        $scope.obj1.border="2px solid green";
    }
    else if($scope.list1.length > 3)
    {
        $scope.message="Too much!";;
        $scope.obj.color="green";
        $scope.obj1.border="2px solid green";
    }
  }

}

})();
