// wheel_of_fortune.js
// CoderGirl WebDev (Winter 2019) — LaunchCode

// VARIABLES /////////////////////////////////////////////////////////

// In a normal application you would ask for user input.
// In this exercise we will set the variables ourselves.

// Set a secret word!

var word = 'PINEAPPLE'; // ALL CAPS

// Ask player if they would like to guess a letter or guess the
// solution.

if (isGuessingLetter = true) {
	console.log('Guess letter');
}
else {
	console.log('fine you suck');
}	

var isGuessingLetter = true; // set to false to guess solution

// If they are guessing a letter, set the letter that they are
// guessing.


//answer array//
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = " _";
}

var remainingLetters = word.length;

//game loop//
while (remainingLetters > 0) {
    //show player progress
    alert(answerArray.join("  "));


// If guessing a letter...
var letter = 'A';
	// If the word contains the letter...
var guess = prompt('guess a letter or solve the word');
    if (guess === null) {
        //exit game loop
        break;
        console.log(exit)
    }   else if (guess.length !==1) {
        alert('please guess a letter');
    }   else {
        //update game progress
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
		// Print back the word with all instances of that letter revealed.

	// If the word does not contain the letter...

		// Print back "Sorry, no <letter>!" but with <letter> replaced by the player's guess.

// If guessing the word...

	// If they are correct...

		// Print "Congratulations! You won Wheel Of Fortune!"

	// If they are incorrect...

		// Print back "Nope, keep trying!"

// End of script!
