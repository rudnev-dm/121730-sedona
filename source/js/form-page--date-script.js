var inputDateField = document.getElementById("day-coming");

var inputDayNumber = document.getElementById("days-duration");

  inputDateField.addEventListener("change", function() {

  var inputDate = document.getElementById("day-coming").value;

  var date = new Date(inputDate);

  var outputDate = document.getElementById("day-departure");

  var userDate = moment(date).format("LL");

  outputDate.value = userDate;

  console.log(outputDate.value);

    moment(inputDate).add(6, "day").format("LL");


})
