(function(){
  /*
   * store all months name and respective number from 0 to 11 (Jan to Dec)
   * this store will be used by buildMonthCalendar method.
   */
  var months = {};
  var tds = $('.monthTd');
  for( var m = 0; m < 12; m++){
    var monthString = calendar.getMonth(m);
    months[monthString] = m;
    tds[m].innerHTML = monthString;
  }
  /*
   * This method, will build dates for the
   * respective month, that pass by param.
   * Will set all 42 dates including dates
   * before and after the respective month.
   *
   * @param month{string}
   *
   * month param is get from link inside
   * all cells inside table monthCalendars
   *
   */
  function buildMonthCalendar(month){
    var year = new Date().getFullYear();

    // Call the builder to construct the date for the month
    var dates = calendar.buildMonth(new Date(year, months[month], 1 ));

    var tds = $('.monthCalendar tr td');

    $('td span').text(month);//set month's name in table monthCalendar

    /* go through all 42 dates, including the current month's dates,
     * last dates from the last month and finish width
     * the frist dates from the next month
     */
    for(var td = 7; td < tds.length-1; td++){
      tds[td].innerHTML = dates[td-7].getDate();
    }
  }

  var animateMonth = function(){
    var month = this.innerHTML;

    buildMonthCalendar(month);

    if($('.monthCalendar').hasClass('animated zoomOut')){
      $('.monthCalendars').removeClass('animated zoomIn');
      $('.monthCalendar').removeClass('animated zoomOut');
    }
    $('.monthCalendars').addClass('animated zoomOut');
    $('.monthCalendar').addClass('animated zoomIn');
    $('.monthCalendar').show();
  }

  $('.monthTd').click(animateMonth);

  $('.back').on('click', function(event){
     $('.monthCalendar').removeClass('animated zoomIn');
     $('.monthCalendars').removeClass('animated zoomOut');
     $('.monthCalendar').addClass('animated zoomOut');
     $('.monthCalendars').addClass('animated zoomIn');

     //this give time for animation finsh for monthCalendar above
     setTimeout(function(){
       // hidden is necessary for don't stay front the monthCalendars table
       // at the end of animation
       $('.monthCalendar').hide();
     },1000)
 })
}());
