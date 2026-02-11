// console.log((document.querySelector(".message").innerHTML = "Correct Number!"));
// document.querySelector(".number").textContent = 15;
// document.querySelector(".highscore").textContent = 20;
// document.querySelector(".guess").value = 23;
//Set up secret number
let secretNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

//Make all functionalities by 'check' button
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(
    (document.querySelector(".guess").value =
      Math.floor(Math.random() * 20) + 1),
  );

  if (!guess) {
    document.querySelector(".message").textContent = "Not any value";
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too high!";
    document.querySelector(".score").textContent = score -= 1;
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too low!";
    document.querySelector(".score").textContent = score -= 1;
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".check").disabled = true;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.color = "#ffffff";
    document.querySelector(".number").style.backgroundColor = "transparent";
    document.querySelector(".number").style.border = "4px solid #ffffff";

    if (score > highScore) highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }

  //Condition for lose game:
  if (score === 0) {
    document.querySelector(".message").textContent = "Better luck next!";
    document.querySelector(".check").disabled = true;
  }
});

//Reset the game by 'Again button'
document.querySelector(".reset").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".check").disabled = false;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".number").style.backgroundColor = "#ffffff";
  document.querySelector(".number").style.color = "#000000";
});
