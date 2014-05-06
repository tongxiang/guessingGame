// Project Requirements:

// When a game begins, there should be a random number generated between 1-100.
// The user should have an input field where they can submit a guess.
// After the user submits a guess, indicate whether their guess is 'hot' or 'cold'. Let the user know if they need to guess higher or lower.
// Allow the user to guess only a certain amount of times. When they run out of guesses let them know the game is over.
// Validate inputs to test if they are real numbers between 1-100.
// Create a new game button that resets the game.
// Store all of the guesses and create a way to check if the guess is a repeat.
// Create a button that provides the answer (Give me a Hint).
// Submit the guess by pressing enter or clicking the submit button.
// Change the background color, add an image, or do something creative when the user guesses the correct answer.

var randomNumber = Math.floor(Math.random() * 100 + 1)
console.log(randomNumber);

//EVENT HANDLERS & LISTENERS 
$(document).ready(function(){
    console.log('document is ready');
    $('#checkit').click(compute); //.click is confusing, should actually have been .onclick 
    $('#reset').click(numReset);
    $('#guessbox').keyPress(function(event){
        var keycode = (event.which ? evt.which: event.keyCode) //how you detect the enter button being pressed event, if it's an older browser it may ony be able to detect it with event.keyCode
        if(keycode == '13'){
            compute();
        }
    })
});

var hotColdCheck = function(){

}

