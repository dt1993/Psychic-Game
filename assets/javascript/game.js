let correct = 0;
let incorrect = 0;
let guessesLeft = 13;
let guessesSoFar = [];
let pyschicChoice = "";
let userGuess = "";

// array of all the letters
let alphabet = [
			"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
			"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
			];

// Randomly chooses a letter

let pyschic = () =>  {
	pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)]
}

// Function to Reset Game
let resetGame = () => {
	guessesLeft = 13;
	guessesSoFar = [];
	pyschic();
};



// Grab users keystroke
document.onkeyup = (event) => {

	userGuess = event.key.toLowerCase();

	pyschic();

	console.log(userGuess);


	if (userGuess == pyschicChoice) {
		correct++;
		alertWin();
	} 
	if (userGuess != pyschicChoice) {
		guessesLeft--;
		guessesSoFar.push(userGuess);
	
	// Output 
	let html = 

		"<p>Wins: </p>" + 
		"<p>"+ correct + "</p>" +
		"<p>Losses: </p>" + 
		"<p>"+ incorrect + "</p>" +
		"<p>Guesses Left: </p>" +
		"<p>"+ guessesLeft + "</p>" +
		"<p>Your Guesses so far:</p>" + 
		"<p>"+ guessesSoFar + "</p>" +
		"<br>";
	

	// Set the inner HTML contents
    document.querySelector("#game_output").innerHTML = html;

    if ( guessesLeft === 0 ) {
		incorrect++;
		alertLoss();
		}
	}

};

let alertWin = () => {
	alert("Congratulations I was thinking of " + pyschicChoice + ".");
	resetGame();
};

let alertLoss = () => {
	alert("I am sorry you are incorrect, I was thinking of " + pyschicChoice + ". " + "You Guessed " + userGuess + ".");
	resetGame();
};