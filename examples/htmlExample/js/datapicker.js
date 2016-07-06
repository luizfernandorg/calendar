var currentDate = new Date();
var updateDates = function(){
  var data = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  var dates = calendar.buildMonth(data);
  console.log(calendar.getMonth(currentDate.getMonth()));
}

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
