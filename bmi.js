function measureBMI ()
{
  let weight = document.getElementById("bmi-weight"),
      height = document.getElementById("bmi-height");
}

function calcBMI () {
  let bmi = null,
      weight = parseInt(document.getElementById("bmi-weight").value),
      height = parseInt(document.getElementById("bmi-height").value),
      results = document.getElementById("bmi-results");


  bmi = 703 * (weight / (height * height));
  bmi = Math.round(bmi * 100) / 100;


  if (bmi < 18.5) {
    results.innerHTML = bmi + ": Underweight";
  } else if (bmi < 25) {
    results.innerHTML = bmi + ": Normal weight";
  } else if (bmi < 30) {
    results.innerHTML = bmi + ": Overweight";
  } else if (bmi >= 30) {
    results.innerHTML = bmi + ": Obesity";
  } else {
    results.innerHTML = "Error. Please re-enter your information and try again.";
  }
  return false;
}