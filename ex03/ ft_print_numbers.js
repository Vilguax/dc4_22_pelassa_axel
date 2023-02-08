function WriteNumbers() {
    var numbers = "One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten";
    var numbersArray = numbers.split(", ");
    for (var i = 0; i < numbersArray.length; i++) {
        console.log(numbersArray[i]);
    }
}

WriteNumbers();