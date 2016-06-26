/*
 * inspired on code made by Jim Okelly
 */
module.exports = (function(){
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
    var firstCalendarDate = function(date){
        var newDate = new Date(date.getFullYear(), date.getMonth(), 1);
        var day = newDate.getDay();
        var dDate = newDate.getDate() - day;
        return new Date(date.setDate(dDate));
    }

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
    var getMonth = function(date){
        return myMonths[date.getMonth()];
    }
    var buildYear = function(year){
        var months = {};
        for(var month = 0; month < 12; month++){
            months[myMonths[month]] = buildMonth(new Date(year, month, 1));
        }
        return months;
    }
    return {
        firstCalendarDate: firstCalendarDate,
        getMonth: getMonth,
        buildMonth: buildMonth,
        buildYear: buildYear
    }
})()
