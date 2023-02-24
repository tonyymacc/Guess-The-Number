// Generate a random number between 1 and 100
const number = Math.floor(Math.random() * 100) + 1;

// Function to check the user's guess
function checkGuess() {
  // Get the user's guess
  const guess = parseInt(document.getElementById("guess").value);

  // Check if the guess is correct
  if (guess === number) {
    document.getElementById("message").innerHTML = "Correct! You guessed the number.";
  } else if (guess > number) {
    document.getElementById("message").innerHTML = "Too high! Guess again.";
  } else {
    document.getElementById("message").innerHTML = "Too low! Guess again.";
  }
}