let correct = 0;
let incorrect = 0;
let guessesLeft = 13;
let guessesSoFar = [];
let pyschicChoice = "";
let userGuess = "";

// array of all the letters in the english alphabet
let alphabet = [
			"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
			"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
			];

// for loop through the alphabet array
// for (let i = 0; i < alphabet.length; i++) {
// 		// console.log(alphabet[i]);
// 	};

// Randomly chooses a letter from the alphabet array. This is the psychic's choice.

let pyschic = () =>  {
	pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

	// console.log(pyschicChoice);

}

// Function to Reset Game to original settings
let resetGame = () => {
	guessesLeft = 13;
	guessesSoFar = [];
	pyschic();
};