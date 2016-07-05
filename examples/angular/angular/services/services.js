angular.module('myServices', [])
.factory('calendarBoxService', [function(){
    var service = {};
    service.months = [
      [], [], []
    ];
    service.getMonth = function(n){
      var val = calendar.getMonth(n);
      return val;
    }
    function getMyMonths(){
      var cols = 0;
      var lines = 0;
      for(var m = 0; m < 12; m++){
        var date = new Date();
        var year = date.getFullYear();
        var month = calendar.getMonth(m);
        var doc = {
          'name': month,
          'number': m
        }
        if(cols < 4){
          service.months[lines].push(doc);
          cols++;
        }else{
          cols = 0;
          lines++;
          service.months[lines].push(doc);
          cols++;
        }
      }
    }

    getMyMonths();

    service.buildMonthCalendar = function(monthNumber){
      var month = [];
      var date = new Date(new Date().getFullYear(), monthNumber, 1);
      var dates = calendar.buildMonth(date);
      var lines = 0;
      var cols = 0;
      for(var d = 0; d < 42; d++){

        if(cols === 0 && lines === 0){
          month.push([]);
        }
        if(cols < 7){
          month[lines].push(dates[d]);
          cols++;
        }else{
          cols = 0;
          lines++;
          month.push([]);
          month[lines].push(dates[d]);
          cols++;
        }
      }
      return month;
    }
    return service;
}])
