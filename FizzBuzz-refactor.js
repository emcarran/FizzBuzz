//- PART 1 => prompt for a number
//- PART 2 => validate input
//- PART 3 => if the input is valid play the game
//- PART 3.1 => count from 1 to the set limit
//- PART 3.2 => for each number check it and output the result

function validate(inputNumber) {
    var userInputValid = true;

    while (inputNumber.length < 1) {
        //        console.log ("Please enter 1 digit or more.");
        var inputNumber = prompt("Please enter 1 digit or more.");
        userInputValid = false;
    }

    while (inputNumber.indexOf(' ') > 0) {
        var inputNumber = prompt("Please don't enter spaces, enter a number.");
        userInputValid = false;
    }

    while (Math.floor(inputNumber) != inputNumber) {
        var inputNumber = prompt("Your upper limit was not a number, please set again.");
        userInputValid = false;
    }

    //if the limit is a number, then play the game
    if (userInputValid = true) {
        fizzbuzz(inputNumber);
    }

}

function fizzbuzz(limit) {

    for (var counter = 1; counter <= limit; counter++) {
        $("#showResults").append(check(counter));
    }
}

function check(currentNumber) {
    var msg = "<li>" + currentNumber + "</li>";

    if (currentNumber % 3 == 0) {
        msg = "<li>Fizz</li>";

    }
    if (currentNumber % 5 == 0) {
        msg = "<li>Buzz</li>";
    }
    if (currentNumber % 15 == 0) {
        msg = "<li>FizzBuzz</li>";
    }

    //output the message
    return msg;
}



$(document).ready(function () {

    var limit = prompt("Please set the upper limit to play.");

    validate(limit);

});
