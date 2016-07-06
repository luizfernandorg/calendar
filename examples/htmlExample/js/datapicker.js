var currentDate = new Date();
var today = new Date();
var dates = [];

var updateDates = function(){
  var data = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

  dates = calendar.buildMonth(data);

  var dateLi = $('ul.dates li a');

  setMonthName();

  for(var d = 0; d < 42; d++){
    if($(dateLi[d]).hasClass('outCurrentMonth')){
      $(dateLi[d]).removeClass('outCurrentMonth');
    }

    if(dates[d].getMonth() !== currentDate.getMonth()){
      $(dateLi[d]).addClass('outCurrentMonth');
    }

    if($(dateLi[d]).parent().hasClass('today')){
      $(dateLi[d]).parent().removeClass('today');
    }

    if(dates[d].getDate() === today.getDate() && dates[d].getMonth() === today.getMonth()){
      $(dateLi[d]).parent().addClass('today');
    }

    $(dateLi[d]).attr('data-role', dates[d].getMonth());

    dateLi[d].innerHTML = dates[d].getDate();
  }
}
var setMonthName = function(){
  $('.month-name').text(calendar.getMonth(currentDate.getMonth()) + ', ' + currentDate.getFullYear());
}

updateDates();

$('.month-left').on('click', function(event){
  event.preventDefault();
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth()-1, currentDate.getDate());
  updateDates();
});

$('.month-right').on('click', function(event){
  event.preventDefault();
  currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, currentDate.getDate());
  updateDates();
});

$('ul.dates li a').on('click',function(event){
  event.preventDefault();
  var dataRoleMonth = parseInt($(this).attr('data-role'));
  var isCurrentMonth = dataRoleMonth === currentDate.getMonth();
  if(!isCurrentMonth){
    console.log(currentDate.getFullYear(), dataRoleMonth, parseInt($(this).text()));
    currentDate = new Date(currentDate.getFullYear(), dataRoleMonth, parseInt($(this).text()) );
    console.log(currentDate);
    updateDates();
  }

})
