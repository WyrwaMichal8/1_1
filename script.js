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

  document.getElementById("ex2_text").addEventListener("input", number);

  function number() {

    var number = document.getElementById("ex2_text");
    var log = document.getElementById('ex2_content');


    log.textContent = "Numer telefonu jest poprawny";

    if (number.value.match(/[\W]/)) {
      log.textContent = "Numer nie może zawierać znaków specjalnych";
    }

    if (number.value.match(/[a-zA-Z]/)) {
      log.textContent = "Numer nie może zawierać liter";
    }

    if (number.value.lenght != 9) {
      log.textContent = "Długość numeru musi być równa 9";
    }
  }

})();