(function(){
  if(document.querySelectorAll('.form__block').item('') != null) {

(function() {
  var dataTravelerInput = 0;
  var card;
  var areaTraveler = document.querySelector(".form__user-data--wrapper");

  function addTraveler() {
    var template = document.querySelector("#traveler-card-template").innerHTML;
    var html = Mustache.render(template);
    var div = document.createElement("div");
    div.classList.add("form__user-data");
    div.classList.add("form__user-data--margin");
    div.innerHTML = html;
    areaTraveler.appendChild(div);
    dataTravelerInput++;
    dataTravelerInput = dataTravelerInput + "";
    div.querySelector(".form__people-counter").innerHTML = dataTravelerInput;
    card = areaTraveler;
  };

  function delTraveler() {
    if (!card.childNodes[0]) {
      return;
    }
    card.removeChild(card.lastChild);
    dataTravelerInput--;
    if (dataTravelerInput < 0) {
      i = 0;
    }
  }
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

  minus.addEventListener("click", function() {
    changeNumber(false);
  });
  plus.addEventListener("click", function() {
    changeNumber(true);
  });

  function changeNumber(operation) {
    var value = Number(input.value);

    if (isNaN(value)) {
      value = 0;
    }
    if (operation) {
      input.value = value + 1;
    } else {
      input.value = value - 1;
      if (input.value < 0) {
        input.value = 0;
    }}
  }
}
})();



(function() {
  var elementsTraveler = document.querySelectorAll(".form__input-human-counter");

  for (var i = 0; i < elementsTraveler.length; i++) {
    initNumberField(elementsTraveler[i]);
  }

  function initNumberField(parent) {
    var input = parent.querySelector("input");
    var minus = parent.querySelector(".form__input-button--left");
    var plus = parent.querySelector(".form__input-button--right");

    minus.addEventListener("click", function() {
      changeNumber(false);
    });
    plus.addEventListener("click", function() {
      changeNumber(true);
    });

    input.addEventListener("input", function() {
      if (typeof(Number(input.value)) != 'number' || Number(input.value) > 50) {
        console.log(parseInt(input.value));
        input.value = dataTravelerInput;
        return;
      }
      if(input.value.indexOf('-') >= 0) {
        input.value = dataTravelerInput;
        return;
      }
      for (input.value; Number(input.value) > Number(dataTravelerInput);) {
        addTraveler();
      }
      if (Number(input.value) == Number(dataTravelerInput)) {
        return;
      }
      for (; input.value < dataTravelerInput;) {
        delTraveler();
      }
      if(!Number(input.value)) {
        input.value = dataTravelerInput;
        return;
      }

      console.log(dataTravelerInput);
    })

    function changeNumber(operation) {
      var value = Number(input.value);

      if (isNaN(value)) {
        value = 0;
      }
      if (operation) {
        input.value = value + 1;
        addTraveler();
      } else {
        delTraveler();
        input.value = value - 1;
        if (input.value < 0) {
          input.value = 0;
        }
      }
    }
  }
})();



(function() {
  var form = document.querySelector(".form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    var data = new FormData(form);
    var xhr = new XMLHttpRequest();
    var time = (new Date()).getTime();

    queue.forEach(function(element) {
      data.append("images", element.file);
    });


    xhr.open("post", "https://echo.htmlacademy.ru/adaptive?" + time);
    xhr.addEventListener("readystatechange", function() {
      if (xhr.readyState == 4) {
        console.log(xhr.responseText);
        var input = document.querySelector("input");
        input.value = " ";
      }
    });
    xhr.send(data);
  });

  var queue = [];

  form.querySelector("#choose-file").addEventListener("change", function() {
    var files = this.files;
    for (var i = 0; i < files.length; i++) {
      preview(files[i]);
    }
    this.value = "";
  });


  function preview(file) {
    if (file.type.match(/image.*/)) {
      var reader = new FileReader();
      reader.addEventListener("load", function(event) {
        var area = document.querySelector(".form__photo-upload-wrapper");
        var template = document.querySelector("#upload-image-template").innerHTML;

        var html = Mustache.render(template, {
          "image": event.target.result,
          "name": file.name
        });

        var figure = document.createElement("figure");
        figure.classList.add("form__photo-preview");
        figure.innerHTML = html;

        area.appendChild(figure);

        figure.querySelector(".form__photo-image--delete").addEventListener("click",
          function(event) {
            event.preventDefault();
            removePreview(figure);
          });

        queue.push({
          "file": file,
          "figure": figure
        });

      });
      reader.readAsDataURL(file);

    }
  };

  function removePreview(figure) {
    queue = queue.filter(function(element) {
      return element.div != figure;
    });
    figure.parentNode.removeChild(figure);
  }

})();
}})();
