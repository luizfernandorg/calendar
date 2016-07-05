angular.module('myDirective', [])
.directive('calendarBox', ['calendarBoxService', function(calendarBoxService){
  var ddo = {};
  ddo.restrict = 'A';
  ddo.link = function(scope, element){
    console.log('calendarBox loaded!');
    scope.$on('showMonth', function(event, data){
      scope.weeks = calendarBoxService.buildMonthCalendar(data);
      // scope.$apply();
      if($('.monthCalendar').hasClass('fadeOut')){
        $('.monthCalendars').removeClass('fadeIn');
        $('.monthCalendar').removeClass('fadeOut');
      }
      $('.monthCalendars').addClass('fadeOut');
      $('.monthCalendars').hide()
      $('.monthCalendar').addClass('fadeIn');
      $('.monthCalendar').show();
    });
    scope.$on('hideMonth', function(){
      $('.monthCalendar').removeClass('fadeIn');
      $('.monthCalendars').removeClass('fadeOut');
      $('.monthCalendar').addClass('fadeOut');
      $('.monthCalendar').hide();
      $('.monthCalendars').addClass('fadeIn');
      $('.monthCalendars').show();
    })
  }
  return ddo;
}])
