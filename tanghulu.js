function darkmode() {
  document.body.classList.toggle("dark")
}

function yourFunction() {
  document.getElementById("2").style.color = "red";
}

function updateServing() {
  let servings = document.getElementById("theirInput").value;
  let output = document.getElementById("3");
  let fruit = document.getElementById("4").value;

  if (!servings || servings <= 0) {
    output.innerHTML = "";
    return;
  }

  let fruitCount = servings * 3;
  output.innerHTML =
    "For " + servings + " Serving(s), You Will Need About " + fruitCount + " " + fruit + ".";
}


function fruitchoice() {
  let x = document.getElementById("4").value;
  let output = document.getElementById("5");

  document.getElementById("5").innerHTML = "You selected: " + x;

  if (x == "Strawberries") {
    output.innerHTML = "A Classic Choice For a Good Balance of Sweetness"
  } else if (x == "Grapes") {
    output.innerHTML = "Crunchy, Refreshing, and Sweet"
  } else if (x == "Hawthorn") {
    output.innerHTML = "Traditional Fruit for Tanghulu, But Less Sweet"
  }
}
