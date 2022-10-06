let reset = document.getElementById("resetButton")
function favoriteColor() {
  if (document.getElementById("negro").checked) {
    document.getElementById("disp").innerHTML =
      "Correct it was " + document.getElementById("negro").value;
    document.getElementById("disp").style.color = "green";
  } else {
    document.getElementById("disp").style.color = "red";
    document.getElementById("disp").innerHTML =
      "Wrong it was " + document.getElementById("negro").value;
  }
}
function landAnimal() {
 if (document.getElementById("elefante").checked) {
    document.getElementById("dispTwo").innerHTML =
      "Correct it was " + document.getElementById("elefante").value;
    document.getElementById("dispTwo").style.color = "green";
  } else {
    document.getElementById("dispTwo").style.color = "red";
    document.getElementById("dispTwo").innerHTML =
      "Wrong it was " + document.getElementById("elefante").value;
  }
}
function popularSport() {
  if (document.getElementById("futbol").checked) {
    document.getElementById("dispThree").innerHTML =
      "Correct it was " + document.getElementById("futbol").value;
    document.getElementById("dispThree").style.color = "green";
  } else {
    document.getElementById("dispThree").style.color = "red";
    document.getElementById("dispThree").innerHTML =
      "Wrong it was " + document.getElementById("futbol").value;
  }
}