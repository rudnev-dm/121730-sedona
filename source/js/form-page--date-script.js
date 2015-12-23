(function () {
  if(document.querySelectorAll('.form__block').item('') != null) {
  var inputDayNumber = document.getElementById("days-duration");

  var duration = document.getElementById("days-duration");

  duration.value = "3";

  var inputDateField = document.getElementById("day-coming");


  inputDateField.addEventListener("input", function() {


    var inputDate = document.getElementById("day-coming").value;

    var date = new Date(inputDate);

    var date = moment(date).add(duration.value , "day").format("LL");

    var outputDate = document.getElementById("day-departure");
    outputDate.value = date;

  })

  duration.addEventListener("input", function() {
    var inputDate = document.getElementById("day-coming").value;
    var outputDate = document.getElementById("day-departure");
     outputDate.value = moment(inputDate).add(duration.value, "day").format("LL");
     console.log(outputDate.value);
  })
}else{
  return;
}
})();
