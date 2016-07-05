app.controller('HomeController', ['$scope', 'calendarBoxService', '$rootScope', function($scope, calendarBoxService, $rootScope){
  $scope.year = calendarBoxService.months;
  $scope.currentDate = new Date();
  $scope.weeks = '';
  $scope.getMonth = function(n){
    console.log(n, new Date(2016, n, 1), new Date(2016, n, 1).getMonth());
    return calendarBoxService.getMonth(n);
  }
  $scope.showMonth = function(monthNumber, month){
      $scope.$broadcast('showMonth', monthNumber, month);
  }
  $scope.hideMonth = function(){
    $scope.$broadcast('hideMonth');
  }
}]);
