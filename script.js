/* Within the function called "randomNumber", it allows for a two parameters to be passed. One will be the value that is taken from the input from the HTML document. The other is a random number that has been generated.
    - Include a check to see if the user inputs a value out of scope of the desired values (1-100)
    - It should be compared to a variable named: numberToGuess
*/


function randomNumber(userGuess, computersNumber) {

    // YOUR CODE BELOW
        if(userGuess > 100 || userGuess<1)
                return "Please input a number between 1 and 100";
                
        else if (userGuess > computersNumber)
                return "Higher";
                
        else if (userGuess < computersNumber)
                return "Lower";
                
        else return `The number was ${userGuess}`;
    // YOUR CODE ABOVE
};



//* Have the Computer Guess your Number ---------------------------------------------
/* 
    Build out the functionality for the computer to guess and evaluate your random number.

    - There are two static functions framed. DO NOT alter the name or parameters of these functions:
        - startCompGuess(num)
        - compGuess(reply)

    *hint:
        - don't forget that variables are a way for us to store information and update later.
        - What is the "current number"? The lowest number? Highest?

    You are not limited to just these functions. Feel free to create a new function that may be called to help manage the flow of your code.
*/

//Code for Ticket #U2_02 begins

//created a variable called currentnumber and assign it a value of 1
let currentNumber = 1;


//return a string that states, "Is your number <currentNumber>?" 
function startCompGuess(num) {
    // This should return a string that denotes the first guessed number

    // YOUR CODE ...
    return `Is your number ${currentNumber}?`

}

let lowest;
let highest;

let createGuess = () => {
    if (currentNumber <= highest ){
        while (currentNumber <= highest ){
                currentNumber = Math.round(Math.random()*100+1);
            };
    return currentNumber;
    }
     if (currentNumber >= lowest){
        while (currentNumber >= lowest ){
                currentNumber=Math.round(Math.random()*100+1);
            };
    return currentNumber;
    }
}

function compGuess(reply) {
    /* 
    *   The parameter "reply" will either be passing "lower", "correct", or "higher". This should be considered when evaluating th elogic and response.

    This should return a string indicating the computers response.
    */

    switch(reply){
        case "lower":
            lowest=currentNumber;
            return `Your number is lower? Is it ${createGuess()}?`;
        
        case "higher":
            highest=currentNumber;
            return "Your number is higher? Is it " + createGuess() + "?";
        
        case "correct":
            return `I knew it was ${currentNumber}!`;

    }

}


