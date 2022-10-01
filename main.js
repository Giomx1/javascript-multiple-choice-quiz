let output = document.getElementById("outputText");
let outputTwo = document.getElementById("outputTextTwo");
let outputThree = document.getElementById("outputTextThree");
let enter = document.getElementById("enterButton");
let input = document.getElementById("colorInput");
let userGuess = (input);
let inputTwo = document.getElementById("animalInput");
let userGuessTwo = (inputTwo);
let inputThree = document.getElementById("sportsInput");
let userGuessThree = (inputThree);
const reset = document.getElementById("resetButton");

function itIsBlack() {
  let black = document.getElementById("correctOne")
  if (userGuess == black) {
    output.innerHTML = "You guessed right";
    output.style.color = "green";
  }
  if (userGuess != black) {
    output.innerHTML = "You guessed wrong, it was " + black; 
    output.style.color = "red";
  } 
}

function itIsElephant() {
  let Elephant = document.getElementById("correctTwo")
  if (userGuessTwo === Elephant) {
     outputTwo.innerHTML = "You guessed right";
    outputTwo.style.color = "green";
  }
  if (userGuessTwo != Elephant) {
    outputTwo.innerHTML = "You guessed wrong, it was " + Elephant;
    outputTwo.style.color = "red";
  }
}

function itIsSoccer() {
  let Soccer = document.getElementById("correctThree")
  if (userGuessThree === Soccer) {
    outputThree.innerHTML = "You guessed right";
    outputThree.style.color = "green";
  }
  if (userGuessThree != Soccer) {
    outputThree.innerHTML = "You guessed wrong, it was " + Soccer;
    outputThree.style.color = "red";
  }
}

function runItAll() {
  itIsBlack()
  itIsElephant()
  itIsSoccer()
}
enter.addEventListener("click", runItAll)

function resetQuiz() {
  output.innerHTML = "";
  outputTwo.innerHTML = "";
  outputThree.innerHTML = "";
}
reset.addEventListener("click", resetQuiz)