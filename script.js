(function() {
  var ex1_button = document.getElementById('ex1_button');
  var ex1_content = document.getElementById('ex1_content');

  ex1_button.onclick = function() {

    var tabela = []
    for (var i = 0; i <= 9; i++) {
      tabela.push(i);
    }
    ex1_content.innerHTML = tabela.toString();
  };

  document.getElementById("ex2_text").addEventListener("change", numer);

  function numer() {

    var number = document.getElementById("ex2_text");
    var log = document.getElementById("ex2_content");

    if (number.value.length != 9) {
      log.textContent = "Długość numeru musi być równa 9 ";
    }

    else if (number.value.match(/[a-zA-Z]/)) {
      log.textContent = "Numer nie może zawierać liter";
    }

    else if (number.value.match(/[\W]/)) {
      log.textContent = "Numer nie może zawierać znaków specjalnych";
    }

    else {
      log.textContent = "Numer telefonu jest poprawny";
    }

  }

  function przenies(evt) {
    evt.dataTransfer.setData("text/html", evt.target.outerHTML);
    evt.dataTransfer.setData("parent", evt.target.parentElement.id);
  }

  function upusc(evt, src) {
    evt.preventDefault();
    const data = evt.dataTransfer.getData("text/html");
    src.innerHTML = "";
    evt.target.innerHTML = data;
  }

  const skad = document.getElementById("ex3_one");
  const dokad = document.getElementById("ex3_two");

  skad.addEventListener("dragstart", przenies);
  dokad.addEventListener("dragover", (evt) => evt.preventDefault());
  dokad.addEventListener("drop", (evt) => upusc(evt, skad));

  dokad.addEventListener("dragstart", przenies);
  skad.addEventListener("dragover", (evt) => evt.preventDefault());
  skad.addEventListener("drop", (evt) => upusc(evt, dokad));



})();