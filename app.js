const clearBtn = document.getElementById("clearButton");
clearBtn.addEventListener("click", () => {
  let k = confirm("Your value wil be deleted");
  let calc = document.getElementById("display");
  if (k == true) {
    calc.value = "";
  }
});