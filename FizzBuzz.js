//$(document).ready(function () {


for (var counter = 1; counter <= 100; counter++) {
    if ((counter % 3 == 0) && (counter % 5 == 0)) {
        var msg = "FizzBuzz";
    } else if (counter % 5 == 0) {
        var msg = "Buzz";
    } else if (counter % 3 == 0) {
        var msg = "Fizz";
    } else {
        //set the default value last
        var msg = counter;
    }
    console.log(msg);
}

//});
