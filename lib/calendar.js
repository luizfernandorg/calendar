(function(calendarModule){
  if(typeof module === 'object' && typeof module.exports === 'object' ){
    module.exports = calendarModule();
  }else{
    return calendar = calendarModule();
  }
}(function(){
    var myMonths = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    /*
     * Receive a date object to get the fist date for the month calendar
     * @param date - is a Date object
     * @return a new Date Object
     *
     * The month calendar is 6 x 7
     * Example:
     *  for 2016 January.
     *  the return will be 2015, December 27
     *  because is the first date in January Calendar
     */
    var firstCalendarDate = function(date){
      //Generate the first date for the month
      var newDate = null;
      if(typeof date.getFullYear === 'function'){
        newDate = date;
      }else{
        throw("date need be a object Date");
      }

      var day = newDate.getDay();

      //get the date difference
      var dDate = newDate.getDate() - day;
      newDate.setDate(dDate);
      //return a new Date object
      return newDate;
    }

    /*
     *
     * @param date  - must be a Date object
     *
     * This method will call the firstCalendarDate to get
     * the first date for that calendar
     *
     * the return will be an array with all Date objects for the calendar
     * precisely 42 dates
     */
    var buildMonth = function(date){
      var day = 0;
      var date = firstCalendarDate(date);
      var dates = [];
      for(var i = 0; i < 42; i++ ){
          dates.push(new Date(date));
          date.setDate(date.getDate()+1);
      }
      return dates;
    }
    /*
     * @param date {Date object|Number}
     * if nothing is pass as param will set a new Date
     * object for get the actual month.
     * accept a number between 0 and 11, from january to december
     * return a string with the name of the month
     */
    var getMonth = function(month){
      var returnMonth = '';
      if (month === undefined){
        returnMonth = myMonths[new Date().getMonth()];
      }else{
        if(typeof month === 'object'){
          returnMonth =  myMonths[date.getMonth()];
        }else{
          if(typeof month === 'number'){
            returnMonth =  myMonths[month]
          }
        }
      }
      return returnMonth;
    }
    /*
     * @param year - a year in number type
     *
     * Will build all months in that year calling buildMonth method
     *
     * The return will be an object with a name of month an array for this name:
     * {
     *  'january': [DateObject, DateObject, ...],
     *  ...
     * }
     */
    var buildYear = function(year){
        var months = {};
        for(var month = 0; month < 12; month++){
          //generate a new month with all 42 dates
          months[myMonths[month]] = buildMonth(new Date(year, month, 1));
        }
        return months;
    }

    return  {
        getMonth: getMonth,
        buildMonth: buildMonth,
        buildYear: buildYear
    }
  }));
