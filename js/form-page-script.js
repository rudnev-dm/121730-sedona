(function() {
  var form = document.querySelector(".form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var data = new FormData(form);
    var xhr = new XMLHttpRequest();
    var time = (new Date()).getTime();

    xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time );
    xhr.addEventListener("readystatechange", function() {
      if(xhr.readyState == 4) {
        console.log(xhr.responseText);
      }
    });
    xhr.send(data);
  });
})();


(function () {
  var elements = document.querySelectorAll(".form__input-number");

  for (var i = 0; i < elements.length; i++) {
    initNumberField(elements[i]);
  }

  function initNumberField(parent) {
  var input = parent.querySelector("input");
  var minus = parent.querySelector(".form__input-button--left");
  var plus = parent.querySelector(".form__input-button--right");

  minus.addEventListener("click", function() {changeNumber(false);});
  plus.addEventListener("click", function() {changeNumber(true);});

  function changeNumber(operation) {
    var value = Number(input.value);

    if (isNaN(value)) {value = 0;}
    if (operation) {input.value = value + 1;} else {input.value = value - 1;}}
}

})();

(function () {
  var elements = document.querySelectorAll(".form__input-human-counter");

  for (var i = 0; i < elements.length; i++) {
    initNumberField(elements[i]);
  }

  function initNumberField(parent) {
  var input = parent.querySelector("input");
  var minus = parent.querySelector(".form__input-button--left");
  var plus = parent.querySelector(".form__input-button--right");

  minus.addEventListener("click", function() {changeNumber(false);});
  plus.addEventListener("click", function() {changeNumber(true);});

  function changeNumber(operation) {
    var value = Number(input.value);

    if (isNaN(value)) {value = 0;}
    if (operation) {input.value = value + 1;} else {input.value = value - 1;}}
}

})();
